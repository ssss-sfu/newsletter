# Software Systems Student Society Newsletter

![Image](docs/example.png)

React-tified version of newsletter design by Gahee Kim and SFU Women in Computing Science (WiCS).

## Install

Run only once.
```
$ python3 -m venv venv && python3 -m pip install -U -r requirements.txt
```

## Workflow

1. `$ source venv/bin/activate`
2. Edit `newsletter.json`
3. `$ python3 newsletter.py`
4. Use `build/build.html`
5. `$ deactivate`

## Example newsletter.json
```
{
  "header": {
    "title": "SSSS October Newsletter",
    "description": "Newsletter description"
  },
  "articles": [
    {
      "header": "Item 1",
      "sections": [
        {
          "subheader": "January 1st, 12:00 PM @ SRYE 5050",
          "text": "Text goes here",
          "links": [
            { "text": "www.sfussss.org", "url": "https://www.sfussss.org/" }
          ]
        }
      ]
    }
  ],
  "signature": {
    "name": "Gahee Kim",
    "position": "Secretary",
    "endingNote": "And that's all from me! Peace!"
  }
}
```

## Warning

Implementation is intentionally outdated because SFU Mail tends to break new features.
Don't turn the tables into flexboxes, nor use advanced CSS selectors.
Images are referred by CDN because the email use-case necessitates support on a file-systemless reader;
Images aren't embeddable inside HTML (investigate Base64 embedding) so they must be referred externally.
