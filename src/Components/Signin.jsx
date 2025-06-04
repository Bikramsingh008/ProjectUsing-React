import React from 'react';
import './Signin.css';

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Welcome Back!</h2>
        <p>Please sign in to continue</p>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
};

export default Signin;
