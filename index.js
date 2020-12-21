// link required packages
const inquirer = require('inquirer');
const promptUser = require('./utils/user-prompts.js');
const generateReadme = require('./src/readme-template.js');
const writeFile = require('./utils/generate-readme.js');
// const log = require('single-line-log').stdout;

console.log(`
============================================
    ~ WELCOME TO THE README GENERATOR ~
============================================

Prompts that require responses are indicated, 
but it is strongly that you respond to all 
prompts to generate the best readme file.
`)

promptUser()
    .then(data => {
        console.log(data);
    });
//     .then(answers => {
//         log('Building readme contents...');
//         return generateReadme(answers)
//     })
//     .then(readmeContents => {
//         log('Generating markdown file...');
//         return writeFile(readmeContents)
//     })
//     .then(response => {
//         log(response.message);
//         console.log(`
// -----------------
// Congratulations, your completed readme file is now located in the /dist folder. Happy Coding!`);
//     })
//     .catch(err => {
//         console.log(err);
//     });