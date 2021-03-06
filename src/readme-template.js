// FUNCTION builds description section of readme file if user submitted a value
// IN string
function renderDescription(description) {
    if (description) {}
}

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == "NONE") {
        return ''
    } else {
        return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`
    };
};

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == "NONE") {
        return ''
    } else {
        return `
## License

Licensed under the [${license}](./license.txt) license.`
    };
};


// TODO: Create a function to generate markdown for README
module.exports = data => {
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

${data.usage}
${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).
`;
};