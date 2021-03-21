const {transform} = require('doctoc');
const fs = require('fs');
const path = require('path');

const mdPath = path.resolve(__dirname, `../src/resources/explanations.md`);
const md = fs.readFileSync(mdPath, 'utf8');

const extraction = transform(md);

const title =
  '**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*\n\n';

const toc = extraction.toc.split(title)[1];

console.log(toc);
