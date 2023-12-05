import React, { useState } from 'react';
import ItemAdd from './components/ItemAdd.js';

function App() {
	const [items, setItems] = useState([]);

	const addItem = (item) => {
		setItems([...items, item]);
	};

  return (
    <div>
      <h1>Shopping List</h1>
			<ItemAdd onAddItem={addItem} />
      {/* Components will be added here in later steps */}
    </div>
  );
}

export default App;
