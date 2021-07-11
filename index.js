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
        name: 'projectUsage',
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();