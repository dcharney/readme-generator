// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
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
        name: 'projectTitle',
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
        name: 'projectDescription',
        message: 'Please enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'How can users install your project?'
    },
    {
        type: 'input',
        name: 'usageInfo',
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
        name: 'contribGuidelines',
        message: 'Please enter the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please enter the test instructions:'
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();