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
    try {
        const { action } = await inquirer.createPromptModule([{
            type: 'list',
            name: 'prompt',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'Exit'],
        }]);

        if (action === 'View All Departments') {
            const departments = await getAllDepartments();
            console.table(departments);
        } else if (action === 'Exit') {
            console.log('Goodbye!');
        }
        startScript();
    } catch (error) {
        console.error('An error occurred: ', error.message);
    }
};

startScript();