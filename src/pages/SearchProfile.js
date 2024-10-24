import React from 'react';
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/SearchProfile.css'; // Import CSS for styling
import { logout } from '../redux/actions/authActions';
import { useLocation } from 'react-router-dom';

const SearchProfile = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const { pathname } = useLocation();

  const isActive = (pn) => {
    return pn === pathname ? 'active' : ''; // Use === for comparison
  };

  return (
    <div>
      <Sidebar />
      <div className="search-container"> {/* Add a container for proper layout */}
        <div className="input-icon">
          <FontAwesomeIcon icon={faSearch} className="search-icon" /> {/* Magnifying glass icon */}
          <input type="text" placeholder="Search Profiles" className="search-input" />
        </div>
      </div>
    </div>
  );
}

export default SearchProfile;
