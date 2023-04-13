// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your repo?',
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are your steps to install your project?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How do you use your project?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What license are you using?',
            name: 'license',
            choices: ['MIT License', 'Creative Commons Zero v1.0 Universal', 'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            message: 'How should developers contribute?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'What tests should this project use?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'github',
        },
    ])
    .then((response) => {


        writeReadMe("README.md", response) 

    });

function writeReadMe(fileName, data) {
    const generatedReadMe = generateMarkdown(data)
    fs.writeFile(fileName, generatedReadMe, (err) => err ? console.error(err) : console.log("success"))
}
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// generateMarkdown(data);
// }
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
