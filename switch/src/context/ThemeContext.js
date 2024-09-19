import { createContext, useState } from 'react';

// Create a Theme Context
export const ThemeContext = createContext();

// Create a Theme Provider to share state across the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      </ThemeContext.Provider>

  );
};
