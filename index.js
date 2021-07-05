const template = require('./src/template.js');
const {writeFile} = require('./generate');
const Employee = require('./lib/Employee');
const inquirer = require('inquirer');
const { choices } = require('yargs');

// still need to link Employee

const generateInfo = employeeData => {
    console.log(`
    ==================
    Add a New Employee
    ==================`
    );

    if (!employeeData.people) {
        employeeData.people = []
    }

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee?.',
            choices: ['Employee', 'Engineer', 'Intern', 'Manager']
        },
        {
            
        }
    ])
}

generateInfo()
    .then(createPage => {
        return template(createPage)
    })
    .then(employeeInfo => {
        return writeFile(employeeInfo)
    })