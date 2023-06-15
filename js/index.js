// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Created an array of questions for user input
const questions = [];

questions.push(
    {
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
    },
    {
    type: 'input',
    message: 'Describe your program:',
    name: 'description'
    },
    {
    type: 'input',
    message: 'Installation instructions?',
    name: 'installation'
    },
    {
    type: 'input',
    message: 'Usage information?',
    name: 'usageInfo'
    },
    {
    type: 'list',
    message: 'Choose a license:',
    name: 'license',
    choices: [
        'MIT',
        'Apache 2.0',
        'GNU GPL V3',
        'MPL 2.0',
        'None'
    ]
    },
    {
    type: 'input',
    message: 'Contribution Guidelines?',
    name: 'guidelines'
    },
    {
    type: 'input',
    message: 'What command must be used to run tests?',
    name: 'testInstructions'
    },
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github'
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
    },
);

// Created a function to write README file
function writeToFile(fileName, READMEpageContent) {
    // Used the fs.writeFile method to create the file
    fs.writeFile(fileName, READMEpageContent, (err) =>
        err ? console.log(err) : console.log('The file has been created!')
    );
}

// Created a function to initialize app
function init() {
    // declared a variable to store the file name
    const fileName = 'newREADME.md';
    // Passed the array of questions to the prompt method, then stored the user's responses in a variable called data
    inquirer.prompt(questions).then((data) => {
        // Called the generateMarkdown function and passed in the data variable
        const READMEpageContent = generateMarkdown(data);
        // Called the writeToFile function and passed in the fileName and READMEpageContent variables
        writeToFile(fileName, READMEpageContent);
    });
};

// Function called to initialize app
init();
