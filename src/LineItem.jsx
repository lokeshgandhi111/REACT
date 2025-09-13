import { FaTrashAlt } from 'react-icons/fa';

export const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
      <input type='checkbox' id={`item-${item.id}`} checked={item.checked} onChange={() => handleCheck(item.id)} />
      <label htmlFor={`item-${item.id}`}>{item.item}</label>
      <FaTrashAlt onClick={() => handleDelete(item.id)} role='button' tabIndex='0' aria-label={`Delete ${item.item}`} />
    </li>
  );
};
