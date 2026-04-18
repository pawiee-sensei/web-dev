import {createNames, getNames} from '../services/name.services.js'

export const create = async (req, res) => {
    try {
        const { name } = req.body;
        const newName  = await createNames(name);
        res.status(201).json({
            message: "Name created successfully",
            data: newName
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getAll = async (req, res) => {
    try {
        const names = await getNames();
        res.status(200).json({ names });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}