// Engineer Class constructor

class Manager {
    // Object containing the Engineer properties
    constructor(name, id, email, officeNumber, gitHub, role,){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.gitHub = gitHub;
        this.role = role;
    }

    // Function to call Engineer methods
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

    getGitHub(){
        return this.gitHub;
    };

    getRole(){
        return this.role;
    };

}

module.exports = Manager

