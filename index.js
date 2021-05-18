const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const employeeQuest = require('./quest/Employee.quest');
const managerQuest = require('./quest/Manager.quest');
const engineerQuest = require('./quest/Engineer.quest');
const internQuest = require('./quest/Intern.quest');

//Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Empty array to hold staff place holders
const staff = [];

// Function to record manager answers from user
async function addManager() {
    const managerAnswers = await inquirer.prompt(managerQuest)
    const {name, id, email, officeNumber} = managerAnswers;
    const manager = new Manager (name, id, email, officeNumber);
    staff.push(managerAnswers);
    console.log(manager)
};


// Function to select next staff role
const addStaff = async () => {
    console.log('Select additional staff members');

   const userInput = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'staffSelection',
            message: 'Which staff member would you like to add next?',
            choices: [
                'Employee', 'Intern', 'Engineer',
            ],
        },
    ]);
    switch (userInput.staffSelection) {
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
    console.log('Add:', userInput.staffSelection);
};

// Function to record Engineer answers from user
const addEngineer = async () => {
    const engineerAnswers = await inquirer.prompt(engineerQuest);
    const { name, id, email, gitHub } = engineerAnswers;
    const engineer = new Engineer(name, id, email, gitHub);
    staff.push(engineerAnswers);
    console.log(engineer);
    addStaff();
};

//Function to record Employee answer from user
const addEmployee = async () => {
    const employeeAnswers = await inquirer.prompt(employeeQuest);
    const { name, id, email } = employeeAnswers;
    const employee = new Employee(name, id, email);
    staff.push(employeeAnswers);
    console.log(employee);
    addStaff();
};

//Function to record Intern answer from user
const addIntern = async () => {
    const interAnswers = await inquirer.prompt(internQuest);
    const { name, id, email, school } = internAnswers;
    const intern = new Intern(name, id, email, school);
    staff.push(internAnswers);
    console.log(intern);
    addStaff();
};

// Function to create HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err){
            console.log (err);
            return;
        } else {
            console.log('You have successfully created your team profile')
        }
    })
};

//Function to write Manager and Staff to HTML page
addManager()
.then(addStaff)
.then(staff => {
    return generateHTML(staff);
})
.then(HTMLFile => {
    return writeFile(HTMLFile);
})
.catch(err => {
    console.log(err);
});