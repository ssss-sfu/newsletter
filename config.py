from typing import List
from typing import Any
from dataclasses import dataclass

# https://json2csharp.com/code-converters/json-to-python


@dataclass
class Link:
    text: str
    url: str

    @staticmethod
    def from_dict(obj: Any) -> "Link":
        _text = str(obj.get("text"))
        _url = str(obj.get("url"))
        return Link(_text, _url)


@dataclass
class Section:
    subheader: str
    text: List[str]

    @staticmethod
    def from_dict(obj: Any) -> "Section":
        _subheader = str(obj.get("subheader"))
        _text = [str(y) for y in obj.get("text")]
        return Section(_subheader, _text)


@dataclass
class Signature:
    name: str
    position: str
    endingNote: str

    @staticmethod
    def from_dict(obj: Any) -> "Signature":
        _name = str(obj.get("name"))
        _position = str(obj.get("position"))
        _endingNote = str(obj.get("endingNote"))
        return Signature(_name, _position, _endingNote)


@dataclass
class Article:
    header: str
    sections: List[Section]

    @staticmethod
    def from_dict(obj: Any) -> "Article":
        _header = str(obj.get("header"))
        _sections = [Section.from_dict(y) for y in obj.get("sections")]
        return Article(_header, _sections)


@dataclass
class Header:
    title: str
    description: str

    @staticmethod
    def from_dict(obj: Any) -> "Header":
        _title = str(obj.get("title"))
        _description = str(obj.get("description"))
        return Header(_title, _description)


@dataclass
class Root:
    header: Header
    articles: List[Article]
    signature: Signature

    @staticmethod
    def from_dict(obj: Any) -> "Root":
        _header = Header.from_dict(obj.get("header"))
        _articles = [Article.from_dict(y) for y in obj.get("articles")]
        _signature = Signature.from_dict(obj.get("signature"))
        return Root(_header, _articles, _signature)


# Example Usage
# jsonstring = json.loads(myjsonstring)
# root = Root.from_dict(jsonstring)
