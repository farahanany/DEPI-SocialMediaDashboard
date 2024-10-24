import React, { useState } from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom'; // Add this line at the top of your file
const Register = () => {
  const [fullname, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='register'>
      <h3 className='register-header'>Welcome to Yapper!</h3>
      <h6 className='register-subheader'>Register</h6>
      <div className='register-data'>
        <form className='register-dataform'>
          <input
            type="text"
            className='register-dataformfullname'
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}  // Use e.target.value
            placeholder='Full Name'
          />
          <input
            type="text"
            className='register-dataformusername'
            value={username}
            onChange={(e) => setUsername(e.target.value)}  // Use e.target.value
            placeholder='Username'
          />
          <input
            type="email"
            className='register-dataformemail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Use e.target.value
            placeholder='Write your email here'
          />
          <input
            type="password"
            className='register-dataformpass'
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Use e.target.value
            placeholder='Write your password here'
          />
          <input
            type="password"
            className='register-dataformconfirm'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  // Use e.target.value
            placeholder='Write your password again'
          />
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
