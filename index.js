// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');
const writeFile = require('./utils/generate-readme.js');

// link array of sample answers for testing functionality
const sampleAnswers = require('./test/sample-answers');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: username => {
            if (username) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter an email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title? (Required)',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can users install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','NONE']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter the test instructions:'
    }
];

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

const promptUser = () => inquirer.prompt(questions);

promptUser()
    .then(answers => {
        return generateReadme(answers)
    })
    .then(readmeContents => {
        return writeFile(readmeContents)
    })
    .then(response => {
        console.log(response.messge);
        console.log('All Done!');
    })
    .catch(err => {
        console.log(err);
    });

