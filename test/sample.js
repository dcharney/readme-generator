// import necessary functions and data

// import function to generate contents of readme
const generateReadme = require('../src/readme-template');
// import function to write contents into a readme file
const writeFile = require('../utils/generate-readme.js');
// links array of sample answers to skip user prompts
const sampleAnswers = require('./sample-answers.js');


// run the test script
writeFile(generateReadme(sampleAnswers))
    .then(response => {
        console.log(response.message);
        console.log('All Done!');
    })
    .catch(err => {
        console.log(err);
    });