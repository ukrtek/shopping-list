const API_URL = 'http://localhost:3001/api';

export const fetchItems = () => {
  return fetch(`${API_URL}/items`)
    .then(response => response.json());
};

export const fetchItem = (id) => {
	return fetch(`${API_URL}/items/${id}`)
		.then(response => response.json());
}

export const addItem = (item) => {
  return fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then(response => response.json());
};


export const deleteItem = (id) => {
	return fetch(`${API_URL}/items/${id}`, {
		method: 'DELETE',
	}).then(response => response.json());
}

export const updateItem = (item) => {
	return fetch(`${API_URL}/items/${item._id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(item),
	}).then(response => response.json());
}