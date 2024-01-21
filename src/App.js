import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListView from './components/ListView.js';
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { fetchLists } from './api.js';
import Sidebar from './components/Sidebar.js';

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetchLists()
      .then(data => setLists(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">Shopping List</h1>
        </div>
      </section>
      <Sidebar lists={lists} />
    </div>

  );
}

export default App;
