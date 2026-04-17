import { loginUser, registerUser } from '../services/auth.services.js';

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body; 
        const user = await registerUser(username, email, password);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;   
        const user = await loginUser(email, password);
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
}
