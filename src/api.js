const API_URL = 'http://localhost:3001/api';

// fetch all lists
export const fetchLists = () => {
  return fetch(`${API_URL}/lists`)
    .then(response => response.json());
};

// fetch one list by id
export const fetchList = (id) => {
  return fetch(`${API_URL}/lists/${id}`)
    .then(response => response.json());
};

// add a new list
export const addList = (name) => {
  return fetch(`${API_URL}/lists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then(response => response.json());
};

// delete a list
export const deleteList = (id) => {
  return fetch(`${API_URL}/lists/${id}`, {
    method: 'DELETE',
  }).then(response => response.json());
};

// add an item to a list: returns item
export const addItemToList = async (listId, itemName) => {
  const response = await fetch(`${API_URL}/lists/${listId}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: itemName }),
  });
  if (!response.ok) {
    throw new Error('Failed to add item to list');
  }
  return await response.json();
};


// delete an item from a list
export const deleteItemFromList = (listId, itemId) => {
  return fetch(`${API_URL}/lists/${listId}/items/${itemId}`, {
    method: 'DELETE',
  }).then(response => response.json());
};

// rename a list
export const renameList = (id, name) => {
  return fetch(`${API_URL}/lists/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  }).then(response => response.json());
};

// get all items
export const fetchItems = () => {
  return fetch(`${API_URL}/items`)
    .then(response => response.json());
};

// get one item by id
export const fetchItem = (id) => {
	return fetch(`${API_URL}/items/${id}`)
		.then(response => response.json());
}

// add a new item to the database
export const addItem = (name) => {
  return fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
	.then(response => response.json());
};

// delete an item
export const deleteItem = (id) => {
	return fetch(`${API_URL}/items/${id}`, {
		method: 'DELETE',
	}).then(response => response.json());
}

export const fetchSuggestions = (searchTerm) => {
  return fetch(`http://localhost:3001/api/items/search?q=${searchTerm}`)
    .then(response => response.json());
};