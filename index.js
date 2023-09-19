const inquirer = require('inquirer');
const db = require('./db/connection');

db.connect(err => {
    if(err) throw err;
    console.log('Connected to database.');
    startScript();
});

var startScript = function () {
    inquirer.prompt([{
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: [
            'View All Departments', 
            'View All Roles', 
            'View All Employees', 
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update An Employee Role',
            'Exit']
    }]).then((answers) => {
        console.log('answers: ', answers)
        if (answers.prompt === 'View All Departments') {
            console.log('You chose to View All Departments!')
        } else if (answers.prompt === 'View All Roles') {
            console.log('You chose to View All Roles')
        } else if (answers.prompt === 'View All Employees') {
            console.log('You chose to View All Employees')
        } else if (answers.prompt === 'Add a Department') {
            console.log('You chose to Add a Department')
        } else if (answers.prompt === 'Add a Role') {
            console.log('You chose to Add a Role')
        } else if (answers.prompt === 'Add an Employee') {
            console.log('You chose  to Add an Employee')
        } else if (answers.prompt === 'Update An Employee Role') {
            console.log('You chose to Update an Employee Role')
        } else if (answers.prompt === 'Exit') {
            console.log('Goodbye!')
        }
        startScript();
    }) 
};