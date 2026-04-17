import pool from '../config/db.js';
import bcrypt from 'bcrypt';

export const registerUser = async (username, email, password) => {
    if (!username || !email || !password) {
        throw new Error('Username, email, and password are required');
    }

    const [existingEmail] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingEmail.length > 0) {
        throw new Error('Email already in use');
    }
    const [existingUsername] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existingUsername.length > 0) {
        throw new Error('Username already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    return {
        id: result.insertId,
        username,
        email
    };
}

export const loginUser = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    // Check if user exists with the provided email
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
        throw new Error('Invalid email');
    }

    // Check password
    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        throw new Error('Invalid password');
    }

    return {
        id: user.id,
        username: user.username,
        email: user.email
    };
}

