import React, { useState } from 'react';
import { addItem, fetchSuggestions } from '../api.js';

function ItemAdd({ onAddItem }) {
  const [itemName, setItemName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setItemName(value);
    
    if (value.length > 1) {
      fetchSuggestions(value).then(data => {
        setSuggestions(data);
      });
    } else {
      setSuggestions([]);
      }
    };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemName.trim() !== '') {
      addItem(itemName)
      .then(newItem => {
        onAddItem(itemName);
        setItemName('');
      });
    }
  }

  return (
    <div className="item-add mb-4">
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input 
              className="input" 
              type="text" 
              value={itemName} 
              onChange={handleChange} 
              placeholder="Add new item"
            />
          </div>
          <div className="control">
            <button className="button is-primary">Add Item</button>
          </div>
        </div>
        <ul className="suggestions">
          {suggestions.map(item => (
            <li key={item._id} onClick={() => setItemName(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );  

  // return (
  //   <div className="item-add">
  //     <form onSubmit={handleSubmit}>
  //       <div className="field">
  //       <div className="control">
  //         <input 
  //           className="input" 
  //           type="text"
  //           value={newItem} 
  //           onChange={handleChange}
  //           placeholder='Add new item'
  //         />
  //       </div>
  //       </div>
  //     <div className="control">
  //       <button className="button">Add Item</button>
  //     </div>
  //     </form>
  //   </div>
  // );
}

export default ItemAdd;
