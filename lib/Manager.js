// Manager will have name, id, email, getName(), getId(), getEmail(), getRole(), and office number properties
// getRole() will return 'Manager'

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    getOfficenum() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;