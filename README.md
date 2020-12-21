# Professional README Generator
![javascript](https://img.shields.io/github/languages/top/dcharney/readme-generator?style=plastic) ![Last Commit](https://img.shields.io/github/last-commit/dcharney/readme-generator?style=plastic) ![Open Issues](https://img.shields.io/github/issues-raw/dcharney/readme-generator?style=plastic) ![Contributors](https://img.shields.io/github/contributors/dcharney/readme-generator?style=plastic) 

## Description

This repository contains the tools to generate a professional readme file via a series of command line prompts. By utilizing this tool, you can skip straight to developing your project!

The resulting file will conatain all the basic information any good readme file should contain including what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions.

A video walkthrough on how to set up and use this tool can be viewed at: _____________

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

To get this project set up and ready to go:

1. Create a local copy of the repository.

```
>>git clone git@github.com:dcharney/readme-generator.git
```
2. Install all required npm packages.

```
>>npm install
```

## Usage

After the app has been successfully installed, follow the instructions below to generate your readme file:

1. Place any images you will want to reference in your readme file in the ./dist/assets/images folder.*

2. Open a terminal in the root project folder and run the following command:

```
>>node index.js
```

2. Fill out the information as prompted.

3. Your completed readme file will be located in the ./dist folder!**

\* *If your images are not displaying correctly, verify that the image name given is accurate and that the image has been placed in the correct folder location.*

** *The readme file generated will contain a link to your project's license. In order for this link to function properly, your license should be located in the root folder and titled 'license.txt' (not case sensitive).*


## Contributing

If you would like to contribute to this project, please follow the rules of the [Contributor Covenant](https://www.contributor-covenant.org/).

## Tests

Open a terminal in the root project folder and run the following command:
```
>>npm test
```
A readme file will be generated in the /dist folder. The resulting file should match [this](./test/sample-README.md).

## Questions

If you have any questions about the repo, open an issue or contact me directly at delaneycharney@gmail.com. You can find more of my work at [dcharney](https://github.com/dcharney/).