import React, { useState } from 'react';

function ItemAdd({ onAddItem }) {
  const [newItem, setNewItem] = useState('');

  const handleChange = (event) => {
    setNewItem(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim() !== '') {
      onAddItem(newItem);
      setNewItem('');
    }
  }

  return (
    <div className="item-add">
      <h3>Add an Item</h3>
      <form onSubmit={handleSubmit}>
        <label>Item</label>
        <input 
          className="input" 
          value={newItem} 
          onChange={handleChange} 
        />
        <button className="button">Add Item</button>
      </form>
    </div>
  );
}

export default ItemAdd;
