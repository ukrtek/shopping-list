import React from 'react';

function ListView({ list }) {
  if (!list) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{list.name}</h2>
      <ul>
        {list.items.map(item => (
          <li key={item._id}>{item.name} - Quantity: {item.quantity}</li> 
        ))}
      </ul>
    </div>
  );
}

export default ListView;
