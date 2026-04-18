const API_BASE_URL = 'http://localhost:3000/api/names';

// CREATE (POST)
export async function createName(payload) {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error ?? 'Failed to create name');
  }

  return data;
}

// READ (GET)
export async function getNames() {
  const response = await fetch(API_BASE_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error ?? 'Failed to fetch names');
  }

  return data;
}