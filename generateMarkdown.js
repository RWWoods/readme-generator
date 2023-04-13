// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return `![MIT](https://img.shields.io/badge/MIT-MIT%20LICENSE-blue)`

    case "Creative Commons Zero v1.0 Universal":
      return `![Creative Commons](https://img.shields.io/badge/CC-Creative%20Commons-blueviolet)`

    case "Mozilla Public License 2.0":
      return `![Mozilla](https://img.shields.io/badge/Mozilla-Mozilla%20Public%20License-critical)`
  
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return `[MIT License](https://www.mit.edu/~amini/LICENSE.md)`
  
    case "Creative Commons Zero v1.0 Universal":
      return `[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/legalcode)`
      
    case "Mozilla Public License 2.0":
      return '[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)'

    default:
      return ``  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project uses ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ${data.install}
  
  ## Usage

  ${data.usage}
  
  ## Credits

  ## License

  ${renderLicenseSection(data.license)}
  
  
  
  ## How to Contribute

  ${data.contribute}
 
  ## Tests

  ${data.test}
  

  ## Questions

  If you need to reach me for questions or comments, my email address is: ${data.email}, and my GitHub repository is ![GitHub](https://github.com/${data.github}).
 
`;
}

module.exports = generateMarkdown;
