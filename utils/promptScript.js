const inquirer = require('inquirer');
const { 
    getAllDepartments 
} = require('./queryFunctions');

const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'Exit',
        ],
    },
];

async function startScript() {
    const { action } = await inquirer.prompt(questions);

    switch (action) {
        case 'View All Departments':
            try {
                const departments = await getAllDepartments();
                console.table(departments);
            } catch (error) {
                console.error('An error occurred:', error.message);
            }
            break;

        // Add future cases here

        case 'Exit':
            exitScript();
            break;
    }
};

function exitScript() {
    console.log('Goodbye!');
    process.exit(0);
};

startScript();