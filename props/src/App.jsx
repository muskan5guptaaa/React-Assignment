// App.js
import React from 'react';
import UserCard from './UserCard';

function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <div style={appStyle}>
        <UserCard name="Muskan Gupta" age={20} occupation="Developer" />
        <UserCard name="Ayush Srivastava" age={25} occupation="Engineer" />
        <UserCard name="Anamika Verma" age={20} occupation="Designer" />
      </div>
    </div>
  );
}

const appStyle = {
  display: 'flex',
  
  flexWrap: 'wrap',
};

export default App;
