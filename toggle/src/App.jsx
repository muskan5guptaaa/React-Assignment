import { useState } from 'react';

// Custom hook for toggling boolean values
function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  // Function to toggle between true and false
  const toggle = () => setState(!state);

  return [state, toggle];
}

export default useToggle;
