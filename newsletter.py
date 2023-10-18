from jinja2 import Environment, FileSystemLoader
from config import Root as newsletterRoot
import os
import json

newsletterConfigFile = "newsletter.json"
newsletterConfig = None
with open(newsletterConfigFile) as f:
    newsletterConfig = newsletterRoot.from_dict(json.loads(f.read()))

assert newsletterConfig is not None

buildFolder = "build"
outputFile = "build.html"
outputPath = os.path.join(buildFolder, outputFile)

environment = Environment(loader=FileSystemLoader("src/templates/"))
template = environment.get_template("index.jinja")

output = template.render(
    header=newsletterConfig.header,
    articles=newsletterConfig.articles,
    signature=newsletterConfig.signature,
)

os.makedirs(buildFolder, exist_ok=True)
with open(outputPath, "w") as f:
    f.write(output)

print(f'Use ./{outputPath}')
