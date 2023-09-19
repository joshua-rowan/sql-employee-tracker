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
        }
        startScript();
    }) 
};