import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Button = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default Button;
