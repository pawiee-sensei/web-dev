import pool from '../config/db.js';

export const createRecord = async (title, description) => {
    if (!title || !description) {
        throw new Error('Title and description are required');
    }
    const [result] = await pool.query('INSERT INTO records (title, description) VALUES (?, ?)',
        [title, description]);
    return {
        id: result.insertId,
        title,
        description
    };
}

export const getRecords = async () => {
    const [rows] = await pool.query('SELECT * FROM records ORDER BY id DESC');
    return rows
}