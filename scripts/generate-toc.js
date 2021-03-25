const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const {transform} = require('doctoc');

// -----------------------------------------------------------------------------

const DOCS_ROOT = `../src/pages/docs`;
const TOCS = `../tocs`;

// -----------------------------------------------------------------------------

const clean = () => {
  const tocsFolder = path.resolve(__dirname, `${TOCS}`);
  rimraf.sync(tocsFolder, {rmdir: true});
  mkdirp.sync(tocsFolder);
};

// -----------------------------------------------------------------------------

const generate = () => {
  const docs = path.resolve(__dirname, `${DOCS_ROOT}`);
  const topics = fs.readdirSync(docs);

  topics.map(generateTOC);
};

// -----------------------------------------------------------------------------

const generateTOC = folder => {
  const outputName = `${folder}.toc.md`;
  console.log(chalk.bold.green(`> tocs/${outputName}`));

  const mdPath = path.resolve(__dirname, `${DOCS_ROOT}/${folder}/${folder}.md`);
  const md = fs.readFileSync(mdPath, 'utf8');

  const extraction = transform(md);

  const title =
    '**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*\n\n';

  let toc = extraction.toc.split(title)[1];
  const topNav = toc.split('\n')[0];

  toc = toc.split(`${topNav}\n`)[1];
  console.log(toc);

  const output = path.resolve(__dirname, `${TOCS}/${outputName}`);

  fs.writeFile(output, toc, err => {
    if (err) {
      return console.log('❌', err);
    }
  });
};

// -----------------------------------------------------------------------------

console.log(`☢️  Generating TOC...\n`);

clean();
generate();

console.log(`☢️  please wait for files...\n`);
