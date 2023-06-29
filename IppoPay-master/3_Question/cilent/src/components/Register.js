import React from "react";
import "./Login.css";
import { useState } from 'react';
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/auth/register", {
        username,
        password,
    }).then((response)=> {
        let {data} = response;
        if(data.statusCode === 200){
            setSuccessMsg(data.message)
        } else if(data.statusCode === 404){
            setSuccessMsg(data.message)
        }
        data.statusCode === 200 && window.location.replace("/signin")
       console.log(response)
    }).catch((err)=> {
        console.log(" register page err",err);
    })
    // console.log(res);

    // Perform validation
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
    } else if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
    } else {
      // Validation passed, perform further actions
      setErrorMessage('');
      // Example: Submit the form data to the server
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <div className="form">Register Form</div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {successMsg && <p className="success-message">{successMsg}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button type="submit" className="submit-button">Register</button>
    </form>
  );
};

export default Register;
