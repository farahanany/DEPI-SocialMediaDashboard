import React, { useState } from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';  // Add axios for API requests

const Register = () => {
  const [fullname, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [gender, setGender] = useState('male');
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post('/api/register', {
        fullname,
        username,
        email,
        password,
        gender
      });

      // Handle successful registration (response)
      console.log(response.data);
      alert('Registration successful!');
    } catch (error) {
      // Handle error (e.g., duplicate username/email, etc.)
      console.error(error.response?.data?.msg || "An error occurred.");
      setErrorMessage(error.response?.data?.msg || "An error occurred.");
    }
  };

  return (
    <div className='register'>
      <h3 className='register-header'>Welcome to Yapper!</h3>
      <h6 className='register-subheader'>Register</h6>
      <div className='register-data'>
        <form className='register-dataform' onSubmit={handleSubmit}>
          <input
            type="text"
            className='register-dataformfullname'
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}  
            placeholder='Full Name'
          />
          <input
            type="text"
            className='register-dataformusername'
            value={username}
            onChange={(e) => setUsername(e.target.value)}  
            placeholder='Username'
          />
          <input
            type="email"
            className='register-dataformemail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}  
            placeholder='Write your email here'
          />
          <div className='password-container'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='register-dataformpass'
              value={password}
              onChange={(e) => setPassword(e.target.value)}  
              placeholder='Write your password here'
            />
            <span onClick={togglePasswordVisibility} className='toggle-password'>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <div className='password-container'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className='register-dataformconfirm'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}  
              placeholder='Write your password again'
            />
            <span onClick={toggleConfirmPasswordVisibility} className='toggle-password'>
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <div className='select-container'>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {errorMessage && <div className='error-message'>{errorMessage}</div>}

          <button className='register-dataformbtn' type="submit">Register</button>
          <small style={{ marginTop: '20px', display: 'block' }}>
            Already Have an Account? <Link to="/login">Login Here!</Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Register;
