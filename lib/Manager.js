// Manager Class constructor

class Manager {
    // Object containing the Manager properties
    constructor(name, id, email, officeNumber, role,){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
    }

    // Function to call Manager methods
    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getOfficeNumber(){
        return this.officeNumber;
    };

    getRole(){
        return this.role;
    };

}

module.exports = Manager

