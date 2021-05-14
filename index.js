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

inquire.prompt(managerQuest).then((answers) => {
const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answer.managerOfficeNumber);
staff.push(manager);
idNumber.push(answers.managerId);
addStaff();
})