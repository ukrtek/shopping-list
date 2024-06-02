import React from "react";

function Sidebar({ lists, onListSelect, loading, error }) {
  console.log("Sidebar lists prop:", lists);

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
        {lists.map((list) => {
          console.log("List object:", list);
          return (
            <li key={list.listId} onClick={() => onListSelect(list.listId)}>
              {list.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
