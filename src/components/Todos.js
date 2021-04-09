import React, { useState } from 'react';

export default function Todos() {
  const [pendingItem, setPendingItem] = useState('');
  const [list, setList] = useState([]);

  const ListItem = (props) => {
    return (
      <li>
        {props.item}
        <button
          className="action"
          onClick={() => handleRemove(props.itemIndex)}
        >
          x
        </button>
      </li>
    );
  };

  const List = () => {
    return (
      <ul>
        {list.map((item, index) => (
          <ListItem
            key={index}
            itemIndex={index}
            item={item.name}
            handleRemove={handleRemove}
          />
        ))}
      </ul>
    );
  };

  const handleItemInput = (evt) => {
    const { value } = evt.target;
    setPendingItem(value);
  };

  const newItemSubmitHandler = (evt) => {
    evt.preventDefault();
    setList([...list, { name: pendingItem }]);
    setPendingItem('');
  };

  const handleRemove = (index) => {
    const newList = list.filter((item) => list.indexOf(item) !== index);
    console.log(newList);
    setList(newList);
  };

  return (
    <div className="widget-todos container">
      <h2>To-Do List</h2>
      <form onSubmit={newItemSubmitHandler} className="todoInput">
        <input
          className="input"
          type="text"
          onChange={handleItemInput}
          value={pendingItem}
          placeholder="Add an item..."
        />
        <button type="submit" name="submit" value="submit">
          add
        </button>
      </form>
      <List />
    </div>
  );
}
