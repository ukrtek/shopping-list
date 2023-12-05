import React, { useState } from 'react';
import ItemAdd from './components/ItemAdd.js';
import ItemList from './components/ItemList.js';

function App() {
	const [items, setItems] = useState([]);

	const addItem = (item) => {
		setItems([...items, item]);
	};

  const removeItem = (index) => {
    // _ here is a convention to indicate that we are ignoring the value
    // filter() takes two arguments: the current item and the index
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Shopping List</h1>
			<ItemAdd onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
  );
}

export default App;
