import React from "react";

function Sidebar({ lists, onListSelect, loading, error }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading lists: {error}</div>;
  }

  if (!Array.isArray(lists) || lists.length === 0) {
    return <div>No lists available</div>;
  }

  return (
    <div className="sidebar">
      <h3>My Lists</h3>
      <ul className="list-of-lists">
        {lists.map((list) => (
          <li key={list._id} onClick={() => onListSelect(list._id)}>
            {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
