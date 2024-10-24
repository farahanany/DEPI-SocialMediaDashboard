import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import PostsGrid from '../components/PostsGrid';
import Sidebar from '../components/Sidebar'; // Import the Sidebar
import '../styles/ProfilePage.css';

const ProfilePage = () => {
    const sendAlert = () => {
        alert("Alert sent to the user!");
    };

    const deleteUser = () => {
        const confirmation = window.confirm("Are you sure you want to delete this user?");
        if (confirmation) {
            alert("User deleted!");
        } else {
            alert("User deletion canceled.");
        }
    };

    return (
        <div className="profile-page">
            <Sidebar /> {/* Add the Sidebar */}
            <div className="main-content">
                <ProfileInfo onSendAlert={sendAlert} onDeleteUser={deleteUser} />
                <PostsGrid />
            </div>
        </div>
    );
};

export default ProfilePage;
