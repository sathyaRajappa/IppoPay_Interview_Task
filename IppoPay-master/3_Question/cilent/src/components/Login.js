import React, { useContext, useRef } from "react";
import "./Login.css";
import { useState } from 'react';
import { Context } from "../context/Context";
import axios from "axios";

const Login = () => {
  const {user} = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const userRef= useRef()
  const passRef = useRef()
  const {dispatch} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})
   try {
    await axios.post("http://localhost:4000/auth/login", {
        username: userRef.current.value,
        password: passRef.current.value
    }).then((response)=>{
        let {data} = response;
        if(data.statusCode === 200){
            setSuccess(data.message)
            data.statusCode === 200 && window.location.replace("/home")
        } else if(data.statusCode === 404){
            setSuccess(data.message)
        }
        dispatch({type: "LOGIN_SUCCESS", payload: data})
    })
   } catch (error) {
    setSuccess(error.message)
    dispatch({type: "LOGIN_FAILURE"})
   }

    // Perform validation
    if (!username || !password) {
      setErrorMessage('Please enter both username and password');
    } else if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
    } else {
      setErrorMessage('');
    }
  };

  console.log(user);

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <div className="form">Sign In Form</div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          ref={userRef}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          ref={passRef}
        />
      </div>
      {success && <p className="error-message">{success}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button type="submit" className="submit-button">Login</button>
    </form>
  );
};

export default Login;
