import inquirer from "inquirer";
import { viewAll, addEmployee, addRole, addDepartment } from "./sql.js";
import { Employee, Role } from "./types.js";

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
                await viewAll('role');
                break;

            case 'Add Role':
                await inquirer.prompt([
                    { type: 'input', name: 'title', message: 'Enter the role\'s title' },
                    { type: 'input', name: 'salary', message: 'Enter the role\'s salary' },
                    { type: 'input', name: 'department_id', message: 'Enter the role\'s department ID' }
                ])
                .then(async (answers) => {
                    const role: Role = {
                        title: answers.title,
                        salary: parseInt(answers.salary),
                        department_id: parseInt(answers.department_id)
                    };

                    await addRole(role);

                });
                break;

            case 'View All Departments':
                viewAll('department');
                break;

            case 'Add Department':
                inquirer.prompt([{ type: 'input', name: 'name', message: 'Enter the department\'s name' }])
                .then(async (answers) => {
                    const Department = {
                        name: answers.name
                    };

                    await addDepartment(Department);
                });
                break;

            case 'Quit':
                exit = true;
                break;

            default:
                console.log('Invalid action');
        }
    });
}