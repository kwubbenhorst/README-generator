// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return '![MIT License](https://img.shields.io/badge/MIT-License-blue)';
    case 'Apache License 2.0':
      return '![Apache License 2.0](https://img.shields.io/badge/Apache-License_2.0-green)';
    case 'GNU GPL v. 2.0':
      return '![GNU GPL v. 2.0](https://img.shields.io/badge/GNU_GPL-v2.0-magenta)';
    case 'GNU GPL v. 3.0':
      return '![GNU GPL v. 3.0](https://img.shields.io/badge/GNU_GPL-v3.0-cyan)';
    default:
      return ''; // For 'Other' or when no license is selected
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return '../Assets/MIT-LICENSE.pages';
    case 'Apache License 2.0':
      return '../Assets/Apache 2.0.pages';
    case 'GNU GPL v. 2.0':
      return '../Assets/GNU-GPL-2.pages';
    case 'GNU GPL v. 3.0':
      return '../Assets/GNU-GPL-3.pages';
    case 'Other':
      return 'Other License'; // Return the text "Other License" without a link
    default:
      return ''; // For 'Other' or when no license is selected
  }
}


// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT License':
      return 'This project is licensed under the [MIT License](./LICENSE-MIT).';
    case 'Apache License 2.0':
      return 'This project is licensed under the [Apache License 2.0](./LICENSE-APACHE-2.0).';
    case 'GNU GPL v. 2.0':
      return 'This project is licensed under the [GNU GPL v. 2.0](./LICENSE-GPL-2.0).';
    case 'GNU GPL v. 3.0':
      return 'This project is licensed under the [GNU GPL v. 3.0](./LICENSE-GPL-3.0).';
    case 'Other':
      return 'This project is not licensed under any open source license.';
    default:
      return 'This project is created without a license. All rights are reserved under copyright law.';
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.descriptionPt1} ${data.descriptionPt2} ${data.descriptionPt3}

${data.deployedApplicationLink ? `[Deployed Application](${data.deployedApplicationLink})` : ''}

## Installation
${data.installation}

## Usage
${data.usageDescription}

${data.usageScreenshots ? `![Screenshot](${data.usageScreenshots})` : ''}
${data.usageVideoLink ? `![Video Walkthrough](${data.usageVideoLink})` : ''}

## Credits
${data.creditCollaborators}
${data.creditAssetSources}

## License
${renderLicenseSection(data.license)}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;