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
inquire.prompt(managerQuest).then((managerAnswers) => {
const {name, id, email, officeNumber} = managerAnswers;
const manager = new Manager (name, id, email, officeNumber);
staff.push(managerAnswers);
console.log(manager);
addStaff();
});

// Function to select next staff role
const addStaff = () => {
    console.log('Select additional staff members');

   return inquirer.prompt([
    {
        type: 'checkbox',
        name: 'staffSelection',
        message: 'Which staff member would you like to add next?',
        choices: [
            'Employee', 'Intern', 'Engineer',
        ],
    },       
    ])
    .then(userInput => {
        switch(userInput.staffSelection){
            case 'Engineer':
                addEngineer();
                break;
                case 'Intern':
                    addIntern();
                    break;
                    case 'Employee':
                        addEmployee();
                        break;
                        default:
                            generateHTML();
        }
    });
};

// Function to record Engineer answers from user
const addEngineer = () => {
    return inquire.prompt(engineerQuest).then((engineerAnswers) => {
        const {name, id, email, gitHub} = engineerAnswers;
        const engineer = new Engineer (name, id, email, gitHub);
        staff.push(engineerAnswers);
        console.log(engineer);
        addStaff();
        });
};

//Function to record Employee answer from user
const addEmployee = () => {
    return inquire.prompt(employeeQuest).then((employeeAnswers) => {
        const {name, id, email} = employeeAnswers;
        const employee = new Employee (name, id, email);
        staff.push(employeeAnswers);
        console.log(employee);
        addStaff();
        });
}