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

export async function addEmployee(employee: Employee): Promise<void> {
    const { first_name, last_name, role_id, manager_id } = employee;

    try {
        await pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`, [first_name, last_name, role_id, manager_id]);
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