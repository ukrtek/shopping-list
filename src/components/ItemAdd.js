import React, { useState } from "react";
import { addItemToList, fetchSuggestions } from "../api.js";

function ItemAdd({ selectedList, setSelectedList }) {
  const [itemName, setItemName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setItemName(value);

    if (timeoutId) clearTimeout(timeoutId);

    if (value.length >= 3) {
      const newTimeoutId = setTimeout(() => {
        fetchSuggestions(value).then((data) => {
          setSuggestions(data);
        });
      }, 1000);
      setTimeoutId(newTimeoutId);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!itemName.trim()) {
      setError("Item name cannot be empty.");
      return;
    }

    setError("");

    try {
      if (!selectedList || !selectedList.listId) {
        setError("No list selected.");
        return;
      }

      const newItem = await addItemToList(selectedList.listId, itemName);

      setItemName("");

      setSelectedList((prevList) => {
        console.log("Previous list:", prevList);

        const items = prevList.items.some(
          (item) => item.itemId === newItem.itemId
        )
          ? prevList.items
          : [...prevList.items, newItem];

        const updatedList = {
          ...prevList,
          items,
        };

        console.log("Updated list:", updatedList);
        return updatedList;
      });
    } catch (error) {
      console.error("Error adding item to list ", error);
      setError("Failed to add item to list");
    }
  };

  return (
    <div className="item-add mb-4">
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              id="item-name-input"
              className="input"
              type="text"
              value={itemName}
              onChange={handleChange}
              placeholder="Add new item"
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="control">
            <button className="button is-primary">Add Item</button>
          </div>
        </div>
        <ul className="suggestions">
          {suggestions.map((item) => (
            <li
              key={item.itemId || item._id}
              onClick={() => setItemName(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default ItemAdd;
