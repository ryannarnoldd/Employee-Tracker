import inquirer from "inquirer";
import { viewAll, addEmployee, addRole, addDepartment, getDepartmentList, getDepartmentID, getManagerList, getRoleList, getEmployeeList, updateEmployeeRole } from "./sql.js";
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
                const managers = await getManagerList();
                const roles = await getRoleList();

                await inquirer.prompt([
                    { type: 'input', name: 'first_name', message: 'Enter the employee\'s first name' },
                    { type: 'input', name: 'last_name', message: 'Enter the employee\'s last name' },
                    { type: 'list', name: 'role', message: 'Enter the employee\'s role', choices: roles },
                    { type: 'list', name: 'manager', message: 'Select the employee\'s manager ID', choices: managers }])
                .then(async (answers) => {
                    const employee: Employee = {
                        first_name: answers.first_name,
                        last_name: answers.last_name,
                        role: answers.role,
                        manager: answers.manager
                    };

                    await addEmployee(employee);
                });
                break;

            case 'Update Employee Role':
                const employees = await getEmployeeList();
                const roleList = await getRoleList();

                await inquirer.prompt([
                    { type: 'list', name: 'employee', message: 'Select the employee to update', choices: employees },
                    { type: 'list', name: 'role', message: 'Select the employee\'s new role', choices: roleList }
                ])
                .then(async (answers) => {
                    await updateEmployeeRole(answers.employee, answers.role);
                });
            


                break;

            case 'View All Roles':
                await viewAll('role');
                break;

            case 'Add Role':
                const departments = await getDepartmentList();

                await inquirer.prompt([
                    { type: 'input', name: 'title', message: 'Enter the role\'s title' },
                    { type: 'input', name: 'salary', message: 'Enter the role\'s salary' },
                    { type: 'list', name: 'department_id', message: 'Select the role\'s department ID', choices: departments}
                ])
                .then(async (answers) => {
                    const role: Role = {
                        title: answers.title,
                        salary: parseInt(answers.salary),
                        department_id: await getDepartmentID(answers.department_id)
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