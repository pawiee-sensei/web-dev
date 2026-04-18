import pool from '../config/db.js';

export const createNames = async (name) => {
    if (!name) {
        throw new Error('Name is required');
    }

    const [existingName] = await pool.query('SELECT * FROM names WHERE name = ?', [name]);
    if (existingName.length > 0) {
        throw new Error('Name already in use');
    }

    const [result] = await pool.query('INSERT INTO names (name) VALUES (?)', [name]);
    return {
        id: result.insertId,
        name
    };
}

export const getNames = async () => {
    const [rows] = await pool.query('SELECT * FROM names ORDER BY id DESC');
    return rows
    
}