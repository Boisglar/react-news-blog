import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handeleInc() {
    setCount(count + 1);
  }

  function handeleDec() {
    setCount(count - 1);
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={handeleInc}>inc</button>
      <button onClick={handeleDec}>dec</button>
    </div>
  );
}
