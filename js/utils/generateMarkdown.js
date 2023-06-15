// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == true){
    return license
  }
  else if (license == false){
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == true){
    return
  }
  else if (license == false){
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == true){
    return
  }
  else if (license == false){
    return ""
  }
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
}

module.exports = generateMarkdown;
