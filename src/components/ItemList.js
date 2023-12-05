import React from 'react';

function ItemList({ items, onRemoveItem }) {
  return (
    <div className="item-list">
      <h3>Items</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
						{item}
						<button onClick={() => onRemoveItem(index)}>Remove</button>
						</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
