// TODO: Include packages needed for this application
const fs = require('fs');
/** @type {inquirer} */
const inquirer = require('inquirer');
const markDown = require("./readmegen");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the title of the document?",
        name:"title",
        // validate: (value) => {if(value){return true} else {return "Please type in the title of the project"}}
    },
    {
        type:"input",
        message:"What is the description of the document?",
        name:"description",
        // validate: (value) => {if(value){return true} else {return "Please type in the description of the project"}}
    },
    // {
    //     type:"input",
    //     message:"What are the Table of Contents of the document? Hint: add commas to separate content",
    //     name:"tableOfContents",
    //     // validate: (value) => {if(value){return true} else {return "Please type in the Table of Contents of the project"}}
    // },
    {
        type:"input",
        message:"What is the installation instructions of the document?",
        name:"installInstructions",
        // validate: (value) => {if(value){return true} else {return "Please type in the installation instructions of the project"}}
    },
    {
        type:"input",
        message:"What is the purpose of the document?",
        name:"usage",
        // validate: (value) => {if(value){return true} else {return "Please type in the usage of the project"}}
    },
    {
        type:"list",
        message:"What is the license of the document?",
        name:"license",
        choices:["MIT", "ISC", "GNUPLv3"],
        filter(value) {
            return value.toLowerCase();
        }
        // validate: (value) => {if(value){return true} else {return "Please type in the license of the project, if any"}}
    },
    {
        type:"input",
        message:"Are there any Contributors to the project?",
        name:"contributers",
        // validate: (value) => {if(value){return true} else {return "Please type in the title of the project"}}
    },
    {
        type:"input",
        message:"Have you run any tests?",
        name:"tests",
        // validate: (value) => {if(value){return true} else {return "Please type in the title of the project"}}
    },
    {
        type:"input",
        message:"Do you have any questions regarding this assignment?",
        name:"question",
        // validate: (value) => {if(value){return true} else {return "Please type in any questions or concerns about the project"}}
    },
    {
        type:"input",
        message:"What is your github username?",
        name:"github",
        // validate: (value) => {if(value){return true} else {return "Please type in your github username"}}
    },
    {
        type:"input",
        message:"What is your email address as well as the prefered way to reach you?",
        name:"email",
        // validate: (value) => {if(value){return true} else {return "Please type in your email"}}
    },
];
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log("Initializing the Setup of your Own Personalized Readme File");
        writeToFile(`${data.title}.md`, markDown.generateReadMe({...data}));
    });
}

init()


// Function call to initialize app
// init();
function runQuestionaire() {
    return inquirer.prompt(questions)
        .then((data) => {
            const mark = markDown.generateReadMe(data)
            console.log(mark)
            return data
        })
        .catch((error) => {
            console.log(error)
        })
}



// runQuestionaire()
// writeToFile()

//description, tableOfContents, installation, usage, license, contributing, tests, questionArea

// inquirer
// .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ])
//   .then((data) => {
//     const htmlPageContent = generateHTML(data);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });
