import React from 'react';

function Sidebar({ lists }) {
  return (
    <div className="sidebar">
      <h3>My Lists</h3>
      <ul className='list-of-lists'>
        {lists.map(list => (
          <li key={list._id}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
