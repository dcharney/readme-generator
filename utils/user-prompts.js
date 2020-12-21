const inquirer = require('inquirer');

const startQuestions = [
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
        name: 'installation_stringOrList',
        message: `~~ Installation ~~
? >>> Are multiple steps required to install your application?`
    }
];

const stringQuestions = [
    {
        type: 'confirm',
        name: 'confirmCommand',
        message: '>>> Is this a command to be run in terminal?'
    },
    {
        type: 'input',
        name: 'listItem',
        message: '>>> Enter command:',
        when: answers => answers.confirmCommand
    },
    {
        type: 'input',
        name: 'command_description',
        message: '>>> What does this command do?',
        when: answers => answers.confirmCommand
    },
    {
        type: 'input',
        name: 'listItem',
        message: '>>> Enter Instructions:',
        when: answers => !answers.confirmCommand
    }
];

const listQuestions = [
    {
        type: 'confirm',
        name: 'confirmCommand',
        message: '>>> Is this step a command to be run in terminal?'
    },
    {
        type: 'input',
        name: 'listItem',
        message: '>>> Enter command:',
        when: answers => answers.confirmCommand
    },
    {
        type: 'input',
        name: 'command_description',
        message: '>>> What does this command do?',
        when: answers => answers.confirmCommand
    },
    {
        type: 'input',
        name: 'listItem',
        message: '>>> Enter instruction:',
        when: answers => !answers.confirmCommand
    },
    {
        type: 'confirm',
        name: 'confirmMoreSteps',
        message: '>>> Would you like to add another step?',
        default: false
    }
];

const endQuestions = [    
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','NONE']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    },
    {
        type: 'confirm',
        name: 'test_stringOrList',
        message: `~~ Tests ~~
? >>> Are multiple steps required to test your application?`
    }
];

const startPrompt = () => inquirer.prompt(startQuestions);

const promptList = (data, arrName) => {
    if (!data[arrName]) {data[arrName] = []};
    return inquirer.prompt(listQuestions)
        .then(answers => {
            data[arrName].push(answers);
            if (answers.confirmMoreSteps) {
                return promptList(data, arrName)
            } else {
                return data
            };
        });
};

const promptString = (data, arrName) => {
    return inquirer.prompt(stringQuestions)
        .then(answers => {
            data[arrName] = answers;
            return data
        });
}

const usagePrompt = data => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'usage_stringOrList',
            message: `~~ Usage ~~
? >>> Are multiple steps required to use your application?`
        }
    ])
        .then(answers => {
            return Object.assign(data,answers)
        });
};

const finalPrompts = data => {
    return inquirer.prompt(endQuestions)
        .then(answers => {
            return Object.assign(data,answers)
        });
};

module.exports = () => {
    return startPrompt()
        .then(data => {
            if (data.installation_stringOrList) {
                return promptList(data, 'installation');
            } else {return promptString(data, 'installation')};
        })
        .then(usagePrompt)
        .then(data => {
            if (data.usage_stringOrList) {
                return promptList(data, 'usage');
            } else {return promptString(data, 'usage')};
        })
        .then(finalPrompts)
        .then(data => {
            if (data.test_stringOrList) {
                return promptList(data, 'test');
            } else {return promptString(data, 'test')};
        })
};