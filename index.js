// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?', 
    'Please include a description of your project.',
    'How do you install your project?',
    'How do you use your project?',
    'How can others contribute to your project?',
    'Please include any tests you have for your project.',
    'Which license are you using for your project?',
    'What is your gitHub username?',
    'What is an email address that others can reach you by?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "title",
            },
            {
                type: "input",
                message: questions[1],
                name: "description",
            },
            {
                type: "input",
                message: questions[2],
                name: "install",
            },
            {
                type: "input",
                message: questions[3],
                name: "usage",
            },
            {
                type: "input",
                message: questions[4],
                name: "contribute",
            },
            {
                type: "input",
                message: questions[5],
                name: "tests",
            },
            {
                type: "list",
                message: questions[6],
                name: "license",
                choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
            },
            {
                type: "input",
                message: questions[7],
                name: "username",
            },
            {
                type: "input",
                message: questions[8],
                name: "email",
            }
        ])
        .then((data) => {
            const fileName = generateMarkdown(data);
        
            fs.writeFile('README.md', fileName, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
          });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
