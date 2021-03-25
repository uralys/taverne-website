const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const {transform} = require('doctoc');

// -----------------------------------------------------------------------------

const TOC_HEADER =
  '**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*\n\n';

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
  const mdPath = path.resolve(__dirname, `${DOCS_ROOT}/${folder}/${folder}.md`);

  let md;
  try {
    md = fs.readFileSync(mdPath, 'utf8');
  } catch (e) {
    return;
  }

  const outputName = `${folder}.toc.md`;
  console.log(chalk.bold.green(`> tocs/${outputName}`));

  const extraction = transform(md);

  let toc = extraction.toc.split(TOC_HEADER)[1];
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
