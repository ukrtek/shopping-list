const API_URL = 'http://localhost:3001/api';

// get all items; export here means we can import this function in other files
export const fetchItems = () => {
  return fetch(`${API_URL}/items`)
    .then(response => response.json());
};

// get one item by id
export const fetchItem = (id) => {
	return fetch(`${API_URL}/items/${id}`)
		.then(response => response.json());
}

// add a new item
export const addItem = (name) => {
  return fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
	// here we are returning the response from the server. .then() is used to handle the response. arrow 
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

// just leave it for now, might uncomment it later
// update an item (PATCH)
// export const updateItem = (item) => {
// 	return fetch(`${API_URL}/items/${item._id}`, {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(item),
// 	}).then(response => response.json());
// }