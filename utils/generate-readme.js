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
        message: 'README file created!'
      });
    });
  });
};

// stage function for external usage
module.exports = writeFile;