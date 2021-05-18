// Manager Class constructor

const Employee = require("./Employee");

class Manager extends Employee  {
    // Object containing the Manager properties
    constructor(name, id, email, officeNumber){
        super(name, id, email, officeNumber, 'Manager');
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    };
}

module.exports = Manager

