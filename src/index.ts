// Imports inquirer and functions from sql.ts
import inquirer from "inquirer";
import { viewAll, addEmployee, addRole, addDepartment, getDepartmentList, getDepartmentID, getManagerList, getRoleList, getEmployeeList, updateEmployeeRole } from "./sql.js";
import { Employee, Role } from "./types.js";

// Main menu. Will loop until user selects 'Quit'.
while (true) {
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

            // Calls the viewAll function from sql.ts with the argument 'employee'
            case 'View All Employees':
                await viewAll('employee');
                break;

            // Calls the getManagerList and getRoleList functions from sql.ts
            case 'Add Employee':
                const managers = await getManagerList();
                const roles = await getRoleList();

                // Prompts user using also the managers and roles arrays.
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

                    // runs function from sql.ts
                    await addEmployee(employee);
                });
                break;

            // Calls the getEmployeeList and getRoleList functions from sql.ts
            case 'Update Employee Role':
                const employees = await getEmployeeList();
                const roleList = await getRoleList();

                // Prompts user using also the employees and roleList arrays.
                await inquirer.prompt([
                    { type: 'list', name: 'employee', message: 'Select the employee to update', choices: employees },
                    { type: 'list', name: 'role', message: 'Select the employee\'s new role', choices: roleList }
                ])
                .then(async (answers) => {
                    // runs function from sql.ts
                    await updateEmployeeRole(answers.employee, answers.role);
                });
                break;

            // Calls the viewAll function from sql.ts with the 'role'
            case 'View All Roles':
                await viewAll('role');
                break;

            // Calls the getDepartmentList function from sql.ts
            case 'Add Role':
                const departments = await getDepartmentList();

                // Prompts user using the departments array
                await inquirer.prompt([
                    { type: 'input', name: 'title', message: 'Enter the role\'s title' },
                    { type: 'input', name: 'salary', message: 'Enter the role\'s salary' },
                    { type: 'list', name: 'department_id', message: 'Select the role\'s department ID', choices: departments}
                ])
                .then(async (answers) => {
                    // runs function from sql.ts
                    const role: Role = {
                        title: answers.title,
                        salary: parseInt(answers.salary),
                        department_id: await getDepartmentID(answers.department_id)
                    };

                    // runs addRole from sql.ts
                    await addRole(role);
                });
                break;

            // Calls the viewAll function from sql.ts the 'department'
            case 'View All Departments':
                await viewAll('department');
                break;

            case 'Add Department':
                // Prompts user to enter the department's name
                await inquirer.prompt([{ type: 'input', name: 'name', message: 'Enter the department\'s name' }])
                .then(async (answers) => {
                    const Department = {
                        name: answers.name
                    };

                    // runs addDepartment from sql.ts
                    await addDepartment(Department);
                });
                break;


            case 'Quit':
                console.log('Goodbye!');
                // quits the program.
                process.exit(0);
        }
    });
}
