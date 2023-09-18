const inquirer = require('inquirer');

const { 
    getAllDepartments 
} = require('./queryFunctions');

// const questions = [
//     {
//         type: 'list',
//         name: 'action',
//         message: 'What would you like to do?',
//         choices: [
//             'View All Departments',
//             'Exit',
//         ],
//     },
// ];

async function startScript() {
    const { action } = await inquirer.prompt([{
        type: 'list',
        name: 'prompt',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'Exit']
    }]).then((answers) => {
        console.log('answers =', answers)
        if (answers.prompt === 'View All Departments') {
            getAllDepartments((err, result) => {
                if(err) throw err;
                console.log('Viewing Departments: ');
                console.table(result);
                startScript();
            });
        } else if (answers.prompt === 'Exit') {
            console.log('Goodbye!');
            process.exit(0);
        }
    })

};

startScript();