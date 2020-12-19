// // in src folder
// // from lesson module: "This folder name stands for "source,"
// // and typically contains raw code used for development that 
// // hasn't been minified or concatenated for production."
// module.exports = templateData => {
    
// }

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateReadme(data) {
  return `# ${data.title}

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

## License

${data.license}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).
`;
};

module.exports = generateReadme;


