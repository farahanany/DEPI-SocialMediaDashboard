import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure this import is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import eye icons
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false); // Fixed state naming convention

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
          <div className="password-container">
            <input
              type={showPass ? "text" : "password"} // Use the showPass state correctly
              className='login-dataformpass'
              value={password}
              onChange={handlePasswordChange}
              placeholder='Write your password here'
            />
            <small className='login-showpass' onClick={() => setShowPass(!showPass)}>
              <FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
            </small>
          </div>
          <button className='login-dataformbtn' type="submit">Log in</button>
          <small style={{ marginTop: '20px', display: 'block' }}>
            Don't have an account? <Link to="/register">Register Here!</Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
