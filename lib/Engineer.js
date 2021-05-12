// Engineer Class constructor

class Engineer {
    // Object containing the Engineer properties
    constructor(name, id, email, gitHub, role,){
        this.name = name;
        this.id = id;
        this.email = email;
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

    getGitHub(){
        return this.gitHub;
    };

    getRole(){
        return this.role;
    };

}

module.exports = Engineer
