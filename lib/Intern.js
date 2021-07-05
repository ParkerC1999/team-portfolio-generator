// Intern will have name, id, email, getName(), getId(), getEmail(), getRole(), school, and getSchool() properties
// getRole() will return 'Intern'

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;