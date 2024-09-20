import React from 'react';
import useToggle from './useToggle'; // Import the custom hook

function LoginLogoutToggle() {
  // Using useToggle with an initial state of false (logged out)
  const [isLoggedIn, toggleLogin] = useToggle(false);

  return (
    <div>
      <h2>{isLoggedIn ? 'Logout' : 'Login'}</h2>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

function ModalToggle() {
  // Using useToggle to manage modal visibility
  const [isModalOpen, toggleModal] = useToggle(false);

  return (
    <div>
      <button onClick={toggleModal}>
        {isModalOpen ? 'Close Modal' : 'Open Modal'}
      </button>
      {isModalOpen && (
        <div className="modal">
          <p>This is a modal!</p>
          <button onClick={toggleModal}>Close</button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <LoginLogoutToggle />
      <ModalToggle />
    </div>
  );
}

export default App;
