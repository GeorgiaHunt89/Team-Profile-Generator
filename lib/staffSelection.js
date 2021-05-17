const staffSelection =[

    userInput => {
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
        },
    }
];

module.exports = staffSelection;