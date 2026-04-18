const API_BASE_URL = 'http://localhost:3000/api/tasks';

export async function createTask(payload) {
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

    return data.task;
}

export async function getTasks() {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error ?? 'Request failed.');
    }

    return data.tasks;
}