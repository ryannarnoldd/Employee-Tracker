import { QueryResult } from 'pg';
import { pool, connectToDb } from './db/connection.js';
import { Employee } from './types.js';

await connectToDb();
 
export async function viewAll(type: string): Promise<void> {
    const sql = `SELECT * FROM ${type}`;
    try {
        const result: QueryResult = await pool.query(sql);
        console.table(result.rows);
    } catch (err) {
        console.error(err);
    }
}

export async function addEmployee(employee: Employee): Promise<void> {
    const { first_name, last_name, role_id, manager_id } = employee;


    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`;
    const params = [first_name, last_name, role_id, manager_id];
    try {
        await pool.query(sql, params);

        console.log(first_name, last_name, 'added!');

    } catch (err) {
        console.error(err);
    }
}






// https://node-postgres.com/apis/pool 