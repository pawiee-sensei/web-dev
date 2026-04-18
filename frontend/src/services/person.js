const API_BASE_URL = 'http://localhost:3000/api/persons';

export async function createPerson(payload) {
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error ?? 'Request failed.');
    }

    return data.person;
}


export async function getPersons() {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error ?? 'Request failed.');
    }

    return data.persons;
}