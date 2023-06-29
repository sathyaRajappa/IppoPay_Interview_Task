import React, { useState } from 'react';
import './Forms.css';
import Test from '../Forms2/Test';

const Forms = () => {
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 6 || password.length > 20) {
      errors.push('Password must have 6-20 characters.');
    }

    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter.');
    }

    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter.');
    }

    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one digit.');
    }

    if (/(.)\1\1/.test(password)) {
      errors.push('Password cannot contain three repeating characters in a row.');
    }

    setErrorMessages(errors);
  };

  return (
    <div className="main">
      <div className="passwords">Password Validation</div>
      <label htmlFor="password" className="label">
        Password:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {errorMessages.length > 0 && (
        <span className="style">
          {errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </span>
      )}
      <div>
        <Test />
      </div>
    </div>
  );
};

export default Forms;
