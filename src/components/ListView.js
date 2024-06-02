import React from "react";

function ListView({ list }) {
  if (!list || !list.items) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{list.title}</h2>
      <ul>
        {list.items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
