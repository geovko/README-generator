// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

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
                choices: [
                    'AFL-3.0',
                    'Apache-2.0',
                    'Artistic-2.0',
                    'BSL-1.0',
                    'BSD-2-Clause',
                    'BSD-3-Clause',
                    'BSD-3-Clause-Clear',
                    'BSD-4-Clause',
                    '0BSD',
                    'CC',
                    'CC0-1.0',
                    'CC-BY-4.0',
                    'CC-BY-SA-4.0',
                    'WTFPL',
                    'ECL-2.0',
                    'EPL-1.0',
                    'EPL-2.0',
                    'EUPL-1.1',
                    'AGPL-3.0',
                    'GPL',
                    'GPL-2.0',
                    'GPL-3.0',
                    'LGPL',
                    'LGPL-2.1',
                    'LGPL-3.0',
                    'ISC',
                    'LPPL-1.3c',
                    'MS-PL',
                    'MIT',
                    'MPL-2.0',
                    'OSL-3.0',
                    'PostgreSQL',
                    'OFL-1.1',
                    'NCSA',
                    'Unlicense',
                    'zLib',
                ],
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
function init() {
    writeToFile();
}

// Function call to initialize app
init();
