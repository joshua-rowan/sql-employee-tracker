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
            console.log('You chose  to Add a Role') 
            db.query(`SELECT * FROM department`, (err, result) => {
                if(err) throw err;
                inquirer.prompt([
                {
                    type: 'input',
                    name: 'role',
                    message: 'What role would you like to add?',
                    validate: roleInput => {
                        if (roleInput) {
                            return true;
                        } else {
                            console.log('No role added');
                            return false;
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'salary',
                    message: 'What will be the salary?',
                    validate: roleSalary => {
                        if (roleSalary) {
                            return true;
                        } else {
                            console.log('Please add a valid salary.');
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'department',
                    message: 'Choose a department for this role',
                    choices: result.map((department) => {
                        return {name: department.name, value: department.id}
                    }),
                    validate: roleDepartment => {
                        if (roleDepartment) {
                            return true;
                        } else {
                            console.log('Department not selected');
                            return false;
                        }
                    }
                }
            ]).then((answers) => {
                db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`,
                [
                    answers.role,
                    answers.salary,
                    answers.department
                ], (err, result) => {
                    if (err) throw err;
                    console.log(`Added ${answers.role} to the database.`)
                    startScript();
                })
            })
            })
            
        } else if (answers.prompt === 'Add an Employee') {
            console.log('You chose  to Add an Employee')
            startScript();
        } else if (answers.prompt === 'Update An Employee Role') {
            console.log('You chose to Update an Employee Role')
            startScript();
        } else if (answers.prompt === 'Exit') {
            console.log('Goodbye!')
        }
    }) 
};

startScript();