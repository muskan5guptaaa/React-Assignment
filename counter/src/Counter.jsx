// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initial state of count is set to 0

  // Function to increase the count
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Function to decrease the count
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={counterStyle}>
      <h2>Counter: {count}</h2>
      <button onClick={increaseCount} style={buttonStyle}>Increase</button>
      <button onClick={decreaseCount} style={buttonStyle}>Decrease</button>
    </div>
  );
};

const counterStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

const buttonStyle = {
  margin: '10px',
  padding: '10px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Counter;
