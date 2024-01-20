import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListView from './components/ListView.js';
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import Sidebar from './components/Sidebar.js';

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Fetch the lists from your API
    fetch('/api/lists')
      .then(response => response.json())
      .then(data => setLists(data))
      .catch(err => console.error(err));
  }, []);

  const onDragEnd = (result) => {
    const { source, destination } = result;
  
    if (!destination) return;
  
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, reorderedItem);
  
    setItems(newItems);
    // Optionally update the backend
  };
  

  return (
    <Router>
      <section className="section">
        <div className="container">
          <h1 className="title">Shopping List</h1>
        </div>
      </section>
      {/* other components like Sidebar, Navbar, etc. */}
      <Routes>
        <Route path="/lists/:id" element={<ListView />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
