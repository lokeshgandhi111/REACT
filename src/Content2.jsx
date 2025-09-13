import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content2 = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'item 1',
    },
    {
      id: 2,
      checked: false,
      item: 'item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'item 3',
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setItems(listItems);
    // saving to local storage
    localStorage.setItem('shoping list', JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input type='checkbox' id={`item-${item.id}`} checked={item.checked} onChange={() => handleCheck(item.id)} />
            <label htmlFor={`item-${item.id}`}>{item.item}</label>

            <FaTrashAlt onClick={() => handleDelete(item.id)} role='button' tabIndex='0' />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content2;
