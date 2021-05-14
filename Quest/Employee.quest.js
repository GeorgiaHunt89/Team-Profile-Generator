const employeeQuest = [
    {
    name: 'name',
    message: 'Please enter the employees name:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'A employees name is required please enter a name:';
        }
    },
    {
    name: 'ID',
    message: 'Please enter the employees ID:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid ID:';
        }
    },
    {
    name: 'Email',
    message: 'Please enter the employees email address:',
    type: 'input',
    validate: answer => {
        if (answer !== ''){
            return true;
        }
        return 'Please enter a valid email address:';
        }
    },
];

module.exports = employeeQuest