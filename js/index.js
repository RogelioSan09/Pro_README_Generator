// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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

// Passed the array of questions to the prompt method
// then stored the user's responses in a variable called data
inquirer.prompt(questions).then((response) => {
    console.log(response);
    data = `# ${response.title}
    ## Description
    ${response.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution Guidelines](#contribution-guidelines)
    * [Test Instructions](#test-instructions)
    * [License](#license)
    * [Questions](#questions)
    ## Installation
    ${response.installation}
    ## Usage
    ${response.usageInfo}
    ## Contribution Guidelines
    ${response.guidelines}
    ## Test Instructions
    ${response.testInstructions}
    ## License
    ${response.license}
    ## Questions
    GitHub: [${response.github}]
    Email: ${response.email}
    `;
});

// Created a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('The file has been created!')
    );
}

// Created a function to initialize app
function init() {
    var fileName = 'README.md';
    writeToFile(fileName, data);
}

// Function called to initialize app
init();
