// import file system module
const fs = require('fs');

// generate markdown file from input string
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Readme file complete!'
            });
        });
    });
};

// stage function for external usage
module.exports = writeFile;