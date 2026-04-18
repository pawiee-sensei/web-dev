import pool from '../config/db.js';

export const createPerson = async ({ name, age, gender }) => {
  if (!name || !age || !gender) {
    throw new Error('Name, age, and gender are required');
  }
  const [result] = await pool.query('INSERT INTO persons (name, age, gender) VALUES (?, ?, ?)',
    [name, age, gender]);
  return {
    id: result.insertId,
    name,
    age,
    gender
  };
}

export const getPersons = async () => {
  const [rows] = await pool.query('SELECT * FROM persons ORDER BY id DESC');
  return rows
}