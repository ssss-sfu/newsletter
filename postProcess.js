const HTMLParser = require("node-html-parser");
const fs = require("fs");

const buildFile = "./build/index.html";
const file = fs.readFileSync(buildFile, { encoding: "utf8" });
const dom = HTMLParser.parse(file);

const rules = ["script", '[href^="/"]'];

rules.forEach((selector) => {
  const results = dom.querySelectorAll(selector);
  console.log(
    `Stripping out selector rule: ${selector} (${results.length} found)`
  );
  results.forEach((result) => result.remove());
});

fs.writeFileSync(buildFile, dom.toString());
