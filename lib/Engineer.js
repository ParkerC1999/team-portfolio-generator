// Engineer will have name, id, email, getName(), getId(), getEmail(), getRole(), github username, and getGithub() properties
// getrole() will return 'Engineer'

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;