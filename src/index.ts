import inquirer from "inquirer";
import { viewAll, addEmployee } from "./sql.js";
import { Employee } from "./types.js";

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

            // Done?
            case 'View All Employees':
                await viewAll('employee');
                break;

            // Progress.
            case 'Add Employee':

                await inquirer.prompt([
                    { type: 'input', name: 'first_name', message: 'Enter the employee\'s first name' },
                    { type: 'input', name: 'last_name', message: 'Enter the employee\'s last name' },
                    { type: 'input', name: 'role_id', message: 'Enter the employee\'s role ID' },
                    { type: 'input', name: 'manager_id', message: 'Enter the employee\'s manager ID' },
                ])
                .then(async (answers) => {
                    const employee: Employee = {
                        first_name: answers.first_name,
                        last_name: answers.last_name,
                        role_id: parseInt(answers.role_id),
                        manager_id: parseInt(answers.manager_id)
                    };

                    await addEmployee(employee);

                });

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