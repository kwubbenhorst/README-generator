// The packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

//An array of questions to collect user input using the inquirer prompt module
//validate or default properties have been added to some objects. Validate forces the user to enter a valid input.  
//Just hitting enter will not allow them to proceed to the next question. In some questions the validate property is 
//left off to allow the flexibility of bypassing the question, or a default value is supplied so that if they just 
//hit enter, the default value will appear in the section. The trim method has been used in the validation check to 
//keep an entry valid where the user has inadvertently entered spaces before or after their response. The syntax here 
//is a ternery operator. For the usage section a when property is employed to handle the condition. The user must provide
//a written description of the usage and may optionally provide a video link and/or screenshots. The specifications for this
//app particularly requested that the list module be used for the license section. The list module has limitations. You cannot
//supply a default or verification halting the user's progress until an answer has been given. Thus the message text pleads
//with the user not to hit enter without making a selection, but with list it cannot constrain them, so the risk is an empty
//license section and no badge. Also there is no way of inputting a custom option with list, so the developer may choose
//"other" if they have a license other than one of the first four options, but they cannot specify it.      

const questions = [
  {
    type: 'input',
    message: 'What is the name of your project? (should reflect your Github repo name and can be case sensitive)',
    name: 'name',
    validate: function (input) {
        return input.trim() !== '' ? true : 'Please enter a project name';
      }  
  },
  {
    type: 'input',
    message: 'Write a description capturing the what, why and how of your project (what was your motivation? why did you build it? what problem does it solve?  End your answer with a period.)',
    name: 'descriptionPt1',
    validate: function (input) {
        return input.trim() !== '' ? true : 'Please enter a project description';
      }  
  },
  {
    type: 'input',
    message: 'Amplify your description by adding what you learned, the challenges you faced and why you chose the technologies you did (End your answer with a period or bypass by hitting enter.)',
    name: 'descriptionPt2',
  },
  {
    type: 'input',
    message: 'Amplify your description further by adding what features make you project stand out and the features you would like to add in the future (End your answer with a period or bypass by hitting enter.)',
    name: 'descriptionPt3',
  },
  {
    type: 'input',
    message: 'If your application is deployed, enter the link here',
    name: 'deployedApplicationLink',
  },
  {
    type: 'input',
    message: 'What steps are needed for a user to get your project up and running? (Just hit enter to accept the default of N/A for this section)',
    name: 'installation',
    default: 'N/A',
  },
  {
    type: 'input',
    message: 'Describe the functionality of your project. (If you will include screenshots and/or a video-link in this section, conclude your description by introducting them, eg. See the following screenshot(s)/ video link which illustrates the functionality)',
    name: 'usageDescription',
    validate: function (input) {
        return input.trim() !== '' ? true : 'Please enter a description of the functionality of your project.';
      }
  },
  {
    type: 'input',
    message: 'Provide the local file pathway for your screenshot(s) here (or bypass by hitting enter. Warning: if you do not enter a valid local file path you will see your input but not your screenshot in the README):',
    name: 'usageScreenshots',
    when: (answers) => answers.usageDescription !== '', 
  },
  {
    type: 'input',
    message: 'Provide a link to a walk-through video from Google Drive for Youtube (or bypass by hitting enter. File extension should be .MOV, .MPEG-1, .MPEG-2, .MPEG4, .MP4, .MPG, .AVI, .WMV, or .WEBM BUT NOT .gif):',
    name: 'usageVideoLink',
    when: (answers) => answers.usageDescription !== '', 
  },
  {
    type: 'input',
    message: 'Credit collaborators by entering their name and a link to their github profile(s). (Just hit enter to accept the default: This project was a single-author creation)', 
    name: 'creditCollaborators',
    default: 'This project was a single-author creation.'
  },
  {
    type: 'input',
    message: 'Credit asset sources by providing links to the primary web presence of other developers or urls that you used for code snippets, reference or tutorials (Bypass by hitting enter)',
    name: 'creditAssetSources',  
  },
  {
    type: 'list',
    message: 'Under what license was your project created? (Please do not hit enter before making a selection from the list, as it will result in an empty license section and no license badge)',
    name: 'license',
    choices: [
      'MIT License',
      'Apache License 2.0',
      'GNU GPL v. 2.0',
      'GNU GPL v. 3.0',
      'Other', 
      'This project was created without an open source license.  It is considered All Rights Reserved under copyright law by default',
    ],
  },
  {
    type: 'input',
    message: 'Enter a statement describing how people can contribute (Simply supply your contact details, or stipulate guidelines (in a contributing.md file of your own or by referring people to the contributor covenant at https://www.contributor-covenant.org/))',
    name: 'contributions',
    validate: function (input) {
        return input.trim() !== '' ? true : 'Please enter a statement on how people can contribute.';
      }
  },
  {
    type: 'input',
    message: 'If you have developed tests to ensure that the application is working as expected, provide step by step details here on how to run them. (Just hit enter to accept the default: N/A)', 
    name: 'tests',
    default: 'N/A'
  },
  {
    type: 'input',
    message: 'Enter your name and email so people can contact you if they have questions. You could also include include any questions you have previously received from users together with your answers)',
    name: 'questions',
    validate: function (input) {
        return input.trim() !== '' ? true : 'Please enter at least a name and email contact for people with questions';
      }
  },
];

inquirer
    .prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers); // Use the function from generateMarkdown.js
        writeToFile('README.md', markdown);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('README.md file created with user input and table of contents.');
        }
    });
}

/*
// A function to initialize the app
function init() {
    
}

// Function call to initialize app
init();
*/