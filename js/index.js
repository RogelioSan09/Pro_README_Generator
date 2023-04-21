// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

var prompts = new Rx.Queries();
inquirer.prompt(prompts);

prompts.next({
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
});
prompts.next({
    type: 'input',
    message: 'Description of your program?',
    name: 'description'
});
prompts.next({
    type: 'input',
    message: 'Installation instructions?',
    name: 'installation'
});
prompts.next({
    type: 'input',
    message: 'Usage information?',
    name: 'usageInfo'
});
prompts.next({
    type: 'input',
    message: 'Contribution Guidelines?',
    name: 'guidelines'
});
prompts.next({
    type: 'input',
    message: 'Test Instructions?',
    name: 'testInstructions'
});
prompts.next({
    type: 'input',
    message: 'Choose a license:',
    name: 'license',
    choices: ['MIT']
});

prompts.complete();

inquirer.prompt(prompts).ui.process.subscribe(onEachAnswer, onError, onComplete);

var newFile = 'title'
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(fileName, data);
}

// Function call to initialize app
init();
