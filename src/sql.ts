import { QueryResult } from 'pg';
import { pool, connectToDb } from './db/connection.js';
import { Employee, Role, Department } from './types.js';

await connectToDb();
 
export async function viewAll(type: string): Promise<void> {
    try {
        const result: QueryResult = await pool.query(`SELECT * FROM ${type}`);
        console.table(result.rows);
    } catch (err) {
        console.error(err);
    }
}

export async function getManagerList(): Promise<string[]> {
    try {
        const managers = await pool.query(`SELECT first_name, last_name FROM employee WHERE manager_id IS NULL`);
        return managers.rows
            .map((manager: Employee) => `${manager.first_name} ${manager.last_name}`);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function addEmployee(employee: Employee): Promise<void> {
    const { first_name, last_name, role, manager } = employee;

    try {
        const roleID = await pool.query(`SELECT id FROM role WHERE title = $1`, [role]);
        const managerID = await pool.query(`SELECT id FROM employee WHERE first_name = $1`, [manager.split(' ')[0]]);

        await pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, 
            [first_name, last_name, roleID.rows[0].id, managerID.rows[0].id]);
        console.log(`The employee ${first_name} ${last_name} was added!`);

    } catch (err) {
        console.error(err);
    }
}

export async function addRole(role: Role): Promise<void> {
    const { title, salary, department_id } = role;

    try {
        await pool.query(`INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)`, [title, salary, department_id]);
        console.log(`The role ${title} was added!`);

    } catch (err) {
        console.error(err);
    }
}

export async function addDepartment(department: Department): Promise<void> {
    const { name } = department;

    try {
        await pool.query(`INSERT INTO department (name) VALUES ($1)`, [name]);
        console.log(`The department ${name} was added!`);

    } catch (err) {
        console.error(err);
    }
}

export async function getDepartmentList(): Promise<string[]> {
    try {
        const dep = await pool.query(`SELECT name FROM department`);
        return dep.rows.map((department: Department) => department.name);
    } catch (err) {
        console.error(err);
        throw err; // Ensure the function always returns a QueryResult or throws an error
    }
}

export async function getDepartmentID(departmentName: string): Promise<number> {
    try {
        const result: QueryResult = await pool.query(`SELECT id FROM department WHERE name = $1`, [departmentName]);
        return result.rows[0].id;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getEmployeeList(): Promise<string[]> {
    try {
        const employees = await pool.query(`SELECT first_name, last_name FROM employee`);
        return employees.rows.map((employee: Employee) => `${employee.first_name} ${employee.last_name}`);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function updateEmployeeRole(employeeName: string, role: string): Promise<void> {
    try {
        const employeeID = await pool.query(`SELECT id FROM employee WHERE first_name = $1`, [employeeName.split(' ')[0]]);
        const roleID = await pool.query(`SELECT id FROM role WHERE title = $1`, [role]);

        await pool.query(`UPDATE employee SET role_id = $1 WHERE id = $2`, [roleID.rows[0].id, employeeID.rows[0].id]);
        console.log(`The employee ${employeeName} was updated to role ${role}!`);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getRoleList(): Promise<string[]> {
    try {
        const roles = await pool.query(`SELECT title FROM role`);
        return roles.rows.map((role: Role) => role.title);
    } catch (err) {
        console.error(err);
        throw err;
    }
}