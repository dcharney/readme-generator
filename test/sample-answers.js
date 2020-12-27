// module.exports = {
//     username: 'dcharney',
//     email: 'delaneycharney@gmail.com',
//     title: 'Professional README Generator',
//     description: `This is a short description of the project. 

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Sit amet consectetur adipiscing elit pellentesque. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Malesuada proin libero nunc consequat interdum varius. Et tortor consequat id porta nibh venenatis cras. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Sagittis id consectetur purus ut faucibus pulvinar. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Rutrum quisque non tellus orci ac auctor augue mauris.

// Malesuada fames ac turpis egestas. Quis ipsum suspendisse ultrices gravida dictum. Nullam vehicula ipsum a arcu cursus vitae congue. Faucibus purus in massa tempor. Libero volutpat sed cras ornare arcu dui vivamus arcu. Est velit egestas dui id ornare. Faucibus nisl tincidunt eget nullam non. Pulvinar etiam non quam lacus suspendisse. Nunc faucibus a pellentesque sit amet. Ut ornare lectus sit amet est placerat. Id aliquet lectus proin nibh nisl condimentum id venenatis. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Faucibus in ornare quam viverra orci sagittis eu volutpat.`,
//     installation: `To get this project set up and ready to go run the following commands:

// \`\`\`
// npm i
// \`\`\``,
//     usage: `1. Follow the Installation instructions as described above.

// 2. Open a terminal in the root project folder and run the following command:

// \`\`\`
// node index.js
// \`\`\`

// 3. Fill out the information as prompted.

// 4. Add any desired mockup images to the ./dist/assets/images folder

// 5. Your completed readme file will be located in the ./dist folder!`,
//     license: 'MIT',
//     contribution: 'If you would like to contribute to this project, please follow the rules of the [Contributor Covenant](https://www.contributor-covenant.org/).',
//     test: `Open a terminal in the root project folder and run the following command:
// \`\`\`
// node test all
// \`\`\``,
// };

module.exports = {
    username: 'dcharney',
    email: 'testemail@gmail.com',
    title: 'Professional README Generator',
    description: 'Use this application to quickly and easily generate a readme file for your project.',
    installation_stringOrList: false,
    installation: [ 
        { confirmCommand: true, listItem: 'npm install', confirmMoreSteps: false, command_description: 'installs all required dependencies' }
    ],
    usage_stringOrList: true,
    usage: [ 
        { confirmCommand: false, listItem: 'Follow the Installation instructions as described above.', confirmMoreSteps: true },
        { confirmCommand: true, listItem: 'node index.js', command_description: 'Run the main application', confirmMoreSteps: true },
        { confirmCommand: false, listItem: 'Fill out the information as prompted.', confirmMoreSteps: true },
        { confirmCommand: false, listItem: 'Add any desired mockup images to the ./dist/assets/images folder.', confirmMoreSteps: true },
        { confirmCommand: false, listItem: 'Your completed readme file will be located in the ./dist folder!', confirmMoreSteps: false }
    ],
    license: 'MIT',
    contribution: 'If you would like to contribute to this project, please follow the rules of the [Contributor Covenant](https://www.contributor-covenant.org/).',
    test_stringOrList: false,
    test: [ { confirmCommand: true, listItem: 'npm test', command_description: 'run the main test script' } ]
};