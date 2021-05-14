const inquire = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const employeeQuest = require('./quest/Employee.quest');
const managerQuest = require('./quest/Manager.quest');
const engineerQuest = require('./quest/Engineer.quest');
const interQuest = require('./quest/Intern.quest');

//Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Empty array to hold staff place holders
const staff = [];
const idNumber = [];

// Function to record manager answers from user
inquire.prompt(managerQuest).then((answers) => {
const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answer.managerOfficeNumber);
staff.push(manager);
idNumber.push(answers.managerId);
addStaff();
});

// // Function to select next staff role
// Function addstaff(answers) {
//     inquire.prompt([
//     {
//         type: 'checkbox',
//         name: 'staffSelection',
//         message: 'Which staff member would you like to add next?',
//         choices: [
//             'Employee', 'Intern', 'Engineer',
//         ],
//     },       
//     ])
//     .then(userInput => {
//         switch(userInput.staffSelection){
//             case 'Engineer':
//                 addEngineer();
//                 break;
//                 case 'Intern':
//                     addIntern();
//                     break;
//                     case 'Employee':
//                         addEmployee();
//                         break;
//                         default:
//                             generateHTML();
//         }
//     });
// };

// Function to record Engineer answers from user
inquire.prompt(engineerQuest).then((answers) => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answer.engineerGitHub);
    staff.push(engineer);
    idNumber.push(answers.engineerId);
    addStaff();
    });