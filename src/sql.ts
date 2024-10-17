import { QueryResult } from 'pg';
import { pool, connectToDb } from './db/connection.js';

await connectToDb();

export const viewAll = async (type: string) => {
    pool.query(`SELECT * FROM ${type}`, (err: Error, result: QueryResult) => {
        if (err) {
            console.log(err);
        } else if (result) {
            console.table(result.rows);
        }
    }
    )
}