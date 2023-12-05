import './ItemList.css';
import React from 'react';

function ItemList({ items, onRemoveItem }) {
  return (
    <div className="item-list mt-2">
      <ul>
        {items.map((item, index) => (
          <li key={index} className='box'>
						<div className="level">
							<div className="level-left">
								<div className="level-item">
									{item}
								</div>
							</div>
							<div className="level-right">
								<button
									onClick = {() => onRemoveItem(index)}
									className="button is-small is-danger"
								>
									Remove
								</button>
							</div>
						</div>
					</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
