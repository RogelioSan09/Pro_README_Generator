// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT"){
    return "![MIT](https://img.shields.io/badge/license-MIT-blue)"
  }
  else if (license == "Apache 2.0"){
    return "![Apache 2.0](https://img.shields.io/badge/license-Apache-green)"
  }
  else if (license == "GNU GPL V3"){
    return "![GNU GPL V3](https://img.shields.io/badge/license-GNU%20GPL%20V3-purple)"
  }
  else if (license == "MPL 2.0"){
    return "![MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-red)"
  }
  else if (license == "None"){
    return ""
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT"){
    return "[MIT](https://choosealicense.com/licenses/mit/)"
  }
  else if (license == "Apache 2.0"){
    return "[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)"
  }
  else if (license == "GNU GPL V3"){
    return "[GNU GPL V3](https://choosealicense.com/licenses/agpl-3.0/)"
  }
  else if (license == "MPL 2.0"){
    return "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)"
  }
  else if (license == "None"){
    return ""
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT"){
    return "Project is licensed under the MIT License"
  }
  else if (license == "Apache 2.0"){
    return "Project is licensed under the Apache 2.0 License"
  }
  else if (license == "GNU GPL V3"){
    return "Project is licensed under the GNU GPL V3 License"
  }
  else if (license == "MPL 2.0"){
    return "Project is licensed under the MPL 2.0 License"
  }
  else if (license == "None"){
    return ""
  }
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usageInfo}
  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.guidelines}
  ## Tests
  ${data.testInstructions}
  ## Questions
  GitHub: [${data.github}]
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
