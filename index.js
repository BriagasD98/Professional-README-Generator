// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// README Criteria Questions for User
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Give a description of your project!'
    },
    {
        type: 'input',
        name: 'projectInstall',
        message: 'How do you install the project?'
    },
    {
        type: 'input',
        name: 'projectInstructions',
        message: 'How do you use your project?'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] 
    },
    {
        type: 'input',
        name: 'projectContribute',
        message: 'How to contribute to the project?'
    },
    {
        type: 'input',
        name: 'projectTest',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'projectGithub',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address for questions about the project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./generated/README.md', data, (err) => {
        // If theres an error, report an error
        if (err) throw err;
        console.log('Your README is ready!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        // displays answers to questions
        console.log(answers);
        //creates the markdown file
        writeToFile('README.md', data);
    })
};

// Function call to initialize app
init();