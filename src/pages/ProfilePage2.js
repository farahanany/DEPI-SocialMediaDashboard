import React from 'react';
import ProfileInfo from '../components/ProfileInfo2';
import PostsGrid from '../components/PostsGrid';
import '../styles/ProfilePage.css';

const ProfilePage2 = () => {
    
    const editUser = () => {
        const confirmation = window.confirm("Are you sure you want to edit this user?");
        if (confirmation) {
            alert("User edited!");
        } else {
            alert("User edition canceled.");
        }
    };

    return (
        <div className="profile-page">
            <div className="main-content">
                <ProfileInfo onDeleteUser={editUser} />
                <PostsGrid />
            </div>
        </div>
    );
};

export default ProfilePage2;
