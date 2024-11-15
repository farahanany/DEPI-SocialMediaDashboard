import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import eye icons
import "../styles/Login.css";
import { login } from '../redux/actions/authActions'; // Import login action
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector

const Login = () => {
  const initialState = { email: '', password: '' }; // Fixed state naming convention
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const { auth } = useSelector(state => state); // Get auth from Redux store
  const [showPass, setShowPass] = useState(false); // Fixed state naming convention
  const [userData, setUserData] = useState(initialState); // Fixed state naming convention
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (auth.token) {
      navigate('/'); // Navigate to home page if authenticated
    }
  }, [auth.token, navigate]);

  const { email, password } = userData; // Fixed destructuring
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData({ email, password });
    await dispatch(login(userData)); // Fixed dispatch function
  };

  return (
    <div className='login'>
      <h3 className='login-header'>Welcome to Yapper!</h3>
      <h6 className='login-subheader'>Login</h6>
      <div className='login-data'>
        <form className='login-dataform' onSubmit={handleSubmit}>
          <input
            type="email"
            className='login-dataformemail'
            value={email}
            name="email"
            onChange={handleChange}
            placeholder='Write your email here'
          />
          <div className="password-container">
            <input
              type={showPass ? "text" : "password"} // Use the showPass state correctly
              className='login-dataformpass'
              value={password}
              name='password'
              onChange={handleChange}
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
