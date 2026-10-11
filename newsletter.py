from jinja2 import Environment, FileSystemLoader
from config import Root as newsletterRoot
from PIL import Image, ImageOps
from urllib.parse import quote, unquote
import os
import sys
import json

newsletterConfigFile = "newsletter.json"
newsletterConfig = None
with open(newsletterConfigFile) as f:
    newsletterConfig = newsletterRoot.from_dict(json.loads(f.read()))

assert newsletterConfig is not None

# Images are served from GitHub, so they must be committed and pushed to main before sending.
# Never move or rename an image after it has been sent: old emails link to it by path.
imageFolder = "src/img"
imageBaseUrl = "https://raw.githubusercontent.com/ssss-sfu/newsletter/main/src/img/"
maxImageWidth = 1200  # 2x the 600px email width
maxJpegBytes = 500_000


def localImagePath(src):
    if src.startswith(imageBaseUrl):
        return unquote(src[len(imageBaseUrl):])
    if not src.startswith(("http://", "https://")):
        return src
    return None


def optimizeImage(path):
    before = os.path.getsize(path)
    with Image.open(path) as img:
        isJpeg = img.format == "JPEG"
        tooWide = img.width > maxImageWidth
        if not tooWide and not (isJpeg and before > maxJpegBytes):
            return
        # Apply phone rotation before EXIF (incl. GPS location) is dropped on save
        img = ImageOps.exif_transpose(img)
        if tooWide:
            img.thumbnail((maxImageWidth, maxImageWidth * 10))
        if isJpeg:
            img.convert("RGB").save(path, "JPEG", quality=82, optimize=True, progressive=True)
        else:
            img.save(path, img.format, optimize=True)
    after = os.path.getsize(path)
    print(f"Optimized {path}: {before / 1e6:.1f} MB -> {after / 1e6:.2f} MB")


usesLocalImages = False
for article in newsletterConfig.recap_articles + newsletterConfig.upcoming_articles:
    for section in article.sections:
        for image in section.images:
            relativePath = localImagePath(image.src)
            if relativePath is not None:
                path = os.path.join(imageFolder, relativePath)
                if not os.path.isfile(path):
                    sys.exit(f"Error: image not found: {path}")
                optimizeImage(path)
                image.src = imageBaseUrl + quote(relativePath)
                usesLocalImages = True
            if not image.alt.strip():
                print(f"Warning: missing alt text for {image.src}")

buildFolder = "build"
outputFile = "build.html"
outputPath = os.path.join(buildFolder, outputFile)

environment = Environment(loader=FileSystemLoader("src/templates/"))
template = environment.get_template("index.jinja")

output = template.render(
    header=newsletterConfig.header,
    recap_articles=newsletterConfig.recap_articles,
    upcoming_articles=newsletterConfig.upcoming_articles,
    signature=newsletterConfig.signature,
)

os.makedirs(buildFolder, exist_ok=True)
with open(outputPath, "w") as f:
    f.write(output)

print(f'Use ./{outputPath}')
if usesLocalImages:
    print(f"Reminder: commit and push {imageFolder}/ before sending, or images won't load")
