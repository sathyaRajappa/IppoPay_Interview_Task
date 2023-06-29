import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.location.replace('/');
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">IPPOPAY</div>
      <div className="navbar-actions">
        <button className="navbar-button" onClick={() => navigate('/signin')}>
          Signin
        </button>
        <button className="navbar-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
