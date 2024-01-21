import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ListView() {
  const [list, setList] = useState(null);
  const { id } = useParams(); // Extract the list ID from the URL

  useEffect(() => {
		fetch(`/api/lists/${id}`)
  		.then(response => {
    		if (!response.ok) {
      		throw new Error(`HTTP error! Status: ${response.status}`);
    		}
    		return response.json();
  		})
  		.then(data => setList(data))
  		.catch(err => console.error('Error fetching list:', err));
  }, [id]);

  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{list.name}</h2>
      <ul>
        {list.items.map(item => (
          <li key={item._id}>{item.name} - Quantity: {item.quantity}</li> // Adjust according to your data structure
        ))}
      </ul>
    </div>
  );
}

export default ListView;
