import { createRecord, getRecords } from "../services/record.services.js";

export const create = async (req, res) => {
    try {
        const { title, description } = req.body;
        const record = await createRecord(title, description);
        res.status(201).json({ message: "Record created successfully", record });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAll = async (req, res) => {
    try {
        const records = await getRecords();
        res.status(200).json({ records });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
