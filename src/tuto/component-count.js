import React from 'react';
import {useCount} from './count-context';

function Counter() {
  const [count, setCount] = useCount();

  const increment = () => setCount(c => c + 1);

  return <button onClick={increment}>{count}</button>;
}

function CountDisplay() {
  const [count] = useCount();

  return <div>The current counter count is {count}</div>;
}

function CountPage() {
  return (
    <div>
      <CountDisplay />
      <Counter />
    </div>
  );
}

export default CountPage;
