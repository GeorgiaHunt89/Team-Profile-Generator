// Intern Class constructor

const Employee = require('./Employee');

class Intern extends Employee {
    // Object containing the Intern properties
    constructor(name, id, email, school){
        super(name, id, email, 'Intern')
        this.school = school;
    }

    getSchool(){
        return this.school;
    };
}

module.exports = Intern
