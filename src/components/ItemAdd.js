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
    <div className="item-add mb-4">
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input 
              className="input" 
              type="text" 
              value={newItem} 
              onChange={handleChange} 
              placeholder="Add new item"
            />
          </div>
          <div className="control">
            <button className="button is-primary">Add Item</button>
          </div>
        </div>
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
