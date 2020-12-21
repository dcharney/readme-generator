// link required packages
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');
const writeFile = require('./utils/generate-readme.js');
const log = require('single-line-log').stdout;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s title? (Required)',
        validate: title => {
            if (title) {
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
        message: 'What does your project do? Enter a short description:'
    },
    {
        type: 'confirm',
        name: 'stringOrList',
        message: 'Are multiple steps required to install your application?'
    }
    // ,
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Please enter usage information:'
    // },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'What kind of license should your project have?',
    //     choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','NONE']
    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: 'Please enter the contribution guidelines:'
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: 'Please enter the test instructions:'
    // }
];

const promptList = localArr => {
    // if description string does not exist, create
    if (!localArr.list) {localArr.list = []};

    let listQuestions = [
        {
            type: 'confirm',
            name: 'confirmCommand',
            message: 'Is this step a command to be run in terminal?'
        },
        {
            type: 'input',
            name: 'listItem',
            message: 'Enter?'
        },
        {
            type: 'confirm',
            name: 'confirmMoreSteps',
            message: 'Is another step required?',
            default: false
        }
    ]

    return inquirer.prompt().then(data => {
        localArr.list.push(data);
        if (data.confirmMoreSteps) {
            return promptList(localArr);
        } else {
            return localArr;
        }
    });
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

const promptUser = () => inquirer.prompt(questions);
console.log(`
============================================
    ~ WELCOME TO THE README GENERATOR ~
============================================

Prompts that require responses are indicated, 
but it is strongly that you respond to all 
prompts to generate the best readme file.
`)

promptUser()
    .then(answers => {
        log('Building readme contents...');
        return generateReadme(answers)
    })
    .then(readmeContents => {
        log('Generating markdown file...');
        return writeFile(readmeContents)
    })
    .then(response => {
        log(response.message);
        console.log('Congratulations, your completed readme file is now located in the /dist folder. Happy Coding!');
    })
    .catch(err => {
        console.log(err);
    });

