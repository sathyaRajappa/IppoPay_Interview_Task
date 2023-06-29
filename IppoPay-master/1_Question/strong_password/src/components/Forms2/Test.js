import React, { useState } from 'react';
import './Test.css';

// Function to check if a password is strong
function strongPasswordChecker(password) {
  // Check password length
  let steps = 0;
  const length = password.length;
  if (length < 6) {
    steps += 6 - length; // Insert characters to meet the minimum length
  } else if (length > 20) {
    steps += length - 20; // Delete characters to meet the maximum length
  }

  // Check for lowercase, uppercase, and digit
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /[0-9]/;
  let missingTypes = 0;
  if (!lowercaseRegex.test(password)) {
    missingTypes++;
  }
  if (!uppercaseRegex.test(password)) {
    missingTypes++;
  }
  if (!digitRegex.test(password)) {
    missingTypes++;
  }
  steps = Math.max(steps, missingTypes);

  // Check for repeating characters
  let repeatSteps = 0;
  let i = 0;
  const repeatingChars = [];
  while (i < length) {
    let repeatCount = 1;
    while (i + repeatCount < length && password[i + repeatCount] === password[i]) {
      repeatCount++;
    }
    if (repeatCount >= 3) {
      repeatSteps += Math.floor(repeatCount / 3); // Replace characters to remove the repetitions
      repeatingChars.push({ index: i + 1, count: repeatCount });
      i += repeatCount - 1;
    } else {
      i++;
    }
  }
  steps = Math.max(steps, repeatSteps);

  return steps;
}

const Test = () => {
  const [password, setPassword] = useState('');
  const [stepsRequired, setStepsRequired] = useState(0);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setStepsRequired(strongPasswordChecker(newPassword));
  };

  return (
    <div className="formTest">
      <label htmlFor="password">Test_Case</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <span>Steps required: {stepsRequired}</span>
    </div>
  );
};

export default Test;
