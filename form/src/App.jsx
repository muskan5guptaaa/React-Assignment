import React, { useState } from 'react';

const UserForm = () => {
  // State to store input values
  const [formData, setFormData] = useState({ name: '', email: '' ,});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
    // You can also clear the form after submission if needed:
    //setFormData({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Fill in your details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>

      {/* Displaying the form data */}
      <div>
        <h3>Entered Data:</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
};

export default UserForm;
