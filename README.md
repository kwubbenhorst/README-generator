# README-generator

![MIT License](https://img.shields.io/badge/MIT-License-blue)

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
An app that uses commandline prompts to gather user input which is then used to generate a README.md file. As busy developers there is an advantage to having a standardized guide through the writing of a README to ensure that all aspects of a professional README are covered and to facilitate the generation of the file.  The app was created using the npm inquier module to gather the information and to constrain the user to offer correct inputs. The fs module was then used to write the file to the working folder, so this application has been created entirely in the node.js backend environment. When working in backend applications a markdown file can be generated and directly added to github with a single push from the working folder. Once the concept of working with module exports from one file and requiring them in another was grasped, the application was fairly straightforward to construct, but the development of the const that would create the prompts had to be thoughtful because in some cases a user should be allowed to bypass a question or select a default answer by hitting enter. In other cases the application should constrain the user to give certain input. The license section was the most challenging as it involved three separate functions to handle the different kinds of inputted data, plus some research on how to create badges. What makes this application stand out is the way in which its prompts constrain the user to create a quality readme. It may offer some gains in the area of speed over writing a readme manually, but it offers the greatest gains in insuring that the resulting readme is a comprehensive document.  It should be noted that the application creates one file with the name README.md at a time. So users should push the generated file to GitHub to commit their work.  The application does not store a library of README.md files for different projects.  The ability to store multiple README.md files for different projects within the working folder might be a way to expand the functionality of the app in the future. 

[Deployed Application](As this is a wholly backend application, it has not been deployed.)

## Installation
The user needs to have node.js installed in their computer and be able to access their terminal. The inquirer and fs modules that are required are included as dependencies with the application.

## Usage
The entry point for the application is the index.js file. If the user has node.js installed on their machine, they simply have to enter node index.js in their terminal and wait for the prompts to guide them through the data gathering. Once this piece of asynchronous activity is complete the program will proceed automatically to the generation of the readme file. The file will appear immediately in the working folder and can be previewed using a code editor such as VS Code.  Once changes in the working folder have been pushed to GitHub, the readme will appear there on the landing page for the repo.  Check out this walkthrough video which demonstrates the functionality of the application.

https://bootcampspot.instructure.com/accounts/1/external_tools/33?launch_type=global_navigation

## Credits
This project was a single-author creation.


## License
This project is licensed under the [MIT License](./LICENSE-MIT).

## Contributions
Contributions to this app are welcome.  Please contact kwubbenhorst@gmail.com

## Tests
N/A

## Questions
The same email can be used for any questions or user feedback
