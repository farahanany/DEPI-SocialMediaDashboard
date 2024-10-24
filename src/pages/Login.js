import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this line at the top of your file

import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='login'>
      <h3 className='login-header'>Welcome to Yapper!</h3>
      <h6 className='login-subheader'>Login</h6>
      <div className='login-data'>
        <form className='login-dataform'>
          <input
            type="email"
            className='login-dataformemail'
            value={email}
            onChange={handleEmailChange}
            placeholder='Write your email here'
          />
          <input
            type="password"
            className='login-dataformpass'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Write your password here'
          />
          <button className='login-dataformbtn' type="submit">Log in</button>
          <small style={{ marginTop: '20px', display: 'block' }}>
  Don't Have an account? <Link to="/register">Register Here!</Link>
</small>

        </form>
      </div>
    </div>
  );
};

export default Login;
