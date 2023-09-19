const inquirer = require('inquirer');
const db = require('./db/connection');

db.connect(err => {
    if(err) throw err;
    console.log('Connected to database.');
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
            db.query(`SELECT * FROM department`, (err, result) => {
                if(err) throw err;
                console.table(result);
                startScript();
            })
        } else if (answers.prompt === 'View All Roles') {
            db.query(`SELECT * FROM role`, (err, result) => {
                if(err) throw err;
                console.table(result);
                startScript();
            })
        } else if (answers.prompt === 'View All Employees') {
            db.query(`SELECT * FROM employee`, (err, result) => {
                if(err) throw err;
                console.table(result);
                startScript();
            })
        } else if (answers.prompt === 'Add a Department') {
            inquirer.prompt([{
                type: 'input',
                name: 'addDepartment',
                message: 'What is the Department Name?',
                validate: newDepartment => {
                    if (newDepartment) {
                        return true;
                    } else {
                        console.log('No Department Added');
                        return false;
                    }
                }
            }]).then((answers) => {
                db.query(`INSERT INTO department (name) VALUES (?)`, [answers.addDepartment], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.addDepartment} to the database.`)
                    startScript();
                })
            })
        } else if (answers.prompt === 'Add a Role') {
            console.log('You chose to Add a Role')
        } else if (answers.prompt === 'Add an Employee') {
            console.log('You chose  to Add an Employee')
        } else if (answers.prompt === 'Update An Employee Role') {
            console.log('You chose to Update an Employee Role')
        } else if (answers.prompt === 'Exit') {
            console.log('Goodbye!')
        }
    }) 
};

startScript();