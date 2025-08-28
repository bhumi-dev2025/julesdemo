import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration successful! Please log in. (This is a simulation)');
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
           <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" required />
          </div>
          <button type="submit" className="submit-button">Register</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
