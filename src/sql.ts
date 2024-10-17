import { QueryResult } from 'pg';
import { pool, connectToDb } from './db/connection.js';

await connectToDb();

export async function viewAll(type: string): Promise<void> {
    try {
        const result: QueryResult = await pool.query(`SELECT * FROM ${type}`);
        console.table(result.rows);
    } catch (err) {
        console.error(err);
    }
}





// https://node-postgres.com/apis/pool 