import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return <div style={{ background: theme === 'dark' ? '#333' : '#fff' }}>Theme: {theme}</div>;
}
 
export default ThemedComponent