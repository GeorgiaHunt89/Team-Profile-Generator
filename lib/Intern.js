// Intern Class constructor

class Intern {
    // Object containing the Intern properties
    constructor(name, id, email, school, role,){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = role;
    }

    // Function to call Intern methods
    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return this.role;
    };

}

module.exports = Intern
