import { useState } from 'react';

const Content = () => {
  const [name, setName] = useState('lokesh');
  // const [count, setCount] = useState(0);

  const nameChange = () => {
    const names = ['lokesh', 'gandhi', 'sai', 'surya'];
    const num = Math.floor(Math.random() * 3);
    return setName(names[num]);
  };

  // click events (vanillaJS)
  const hancleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <main>
      <p onDoubleClick={hancleClick}>Hello {name} !</p>

      <button type='button' onClick={nameChange}>
        change name
      </button>
    </main>
  );
};

export default Content;
