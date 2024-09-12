// UserCard.js
import React from 'react';

const UserCard = ({ name, age, occupation }) => {
  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
  margin: '10px',
  maxWidth: '200px',
};

export default UserCard;
