// Include packages needed for this application
const inquirer = require('inquirer');
// Created an array of questions for user input
const questions = [];
questions.push({
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
});
questions.push({
    type: 'input',
    message: 'Description of your program?',
    name: 'description'
});
questions.push({
    type: 'input',
    message: 'Installation instructions?',
    name: 'installation'
});
questions.push({
    type: 'input',
    message: 'Usage information?',
    name: 'usageInfo'
});
questions.push({
    type: 'input',
    message: 'Contribution Guidelines?',
    name: 'guidelines'
});
questions.push({
    type: 'input',
    message: 'Test Instructions?',
    name: 'testInstructions'
});
questions.push({
    type: 'input',
    message: 'Choose a license:',
    name: 'license',
    choices: ['MIT']
});
questions.push({
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github'
});
questions.push({
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(fileName, data);
}

// Function call to initialize app
init();
