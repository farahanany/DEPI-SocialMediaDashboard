import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/SearchProfile.css'; // Import CSS for styling

const SearchProfile = () => {
  return (
    <div>
      <Sidebar />
      <div className="search-container"> {/* Add a container for proper layout */}
        <input type="text" placeholder='Search Profiles' className="search-input" />
      </div>
    </div>
  );
}

export default SearchProfile;
