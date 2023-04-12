// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
            message: 'What do you want your bio to be?',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your linkedIn url?',
            name: 'LinkedIn',
        },
        {
            type: 'input',
            message: 'What is your GitHub url?',
            name: 'GitHub',
        },
    ])
    .then((response) => {


        writeHTML("index.html", response) 

    });

function writeHTML(fileName, data) {
    const generatedHTML = htmlFile(data)
    fs.writeFile(fileName, generatedHTML, (err) => err ? console.error(err) : console.log("success"))
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
