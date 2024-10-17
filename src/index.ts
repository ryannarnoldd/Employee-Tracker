import inquirer from "inquirer";
import { viewAll } from "./sql.js";

let exit: boolean = false;

while (!exit) {
    await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Select an action',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ],
        },
    ])
    .then(async (answers) => {
        switch (answers.action) {

            case 'View All Employees':
                await viewAll('employee');
                
                break;
            case 'Add Employee':

                console.log('Add Employee');
                break;

            case 'Update Employee Role':

                console.log('Update Employee Role');
                break;
            case 'View All Roles':

                viewAll('role');
                break;
            case 'Add Role':

                console.log('Add Role');
                break;
            case 'View All Departments':
                viewAll('department');
                break;

            case 'Add Department':

                console.log('Add Department');
                break;
            case 'Quit':
                exit = true;
                break;
        }
    });
}