// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={loginStyle}>
      {isLoggedIn ? <h2>Welcome, User!</h2> : <h2>Please log in</h2>}
      {isLoggedIn ? (
        <button onClick={handleLogout} style={buttonStyle}>Logout</button>
      ) : (
        <button onClick={handleLogin} style={buttonStyle}>Login</button>
      )}
    </div>
  );
};

const loginStyle = {
  textAlign: 'center',
  marginTop: '50px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
};

export default Login;
