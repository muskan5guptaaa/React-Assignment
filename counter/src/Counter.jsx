// Counter.js
import React, { useState } from 'react';

const Counter=()=>{
  const[count,setCount]=useState(0);
    
 const increaseCount=()=>{
  setCount(count+1);

  const decreaseCount = () => {
    setCount(count - 1);

 }
}

  return (
    <div style={counterStyle}>
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
