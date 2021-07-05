// Employee will have name, id, email, getName(), getId(), getEmail(), and getRole() properties
// getRole() will return 'Employee'

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.id;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee