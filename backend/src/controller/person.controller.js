import {createPerson, getPersons} from '../services/person.services.js'

export const create = async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const person = await createPerson({ name, age, gender });

    res.status(201).json({
      message: "Person created successfully",
      person,
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const getAll = async (req, res) => {
  try {
    const persons = await getPersons();
    res.status(200).json({ persons });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}