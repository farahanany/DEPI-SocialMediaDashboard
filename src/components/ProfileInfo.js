import React from 'react';
import '../styles/ProfileInfo.css';
import userImage from '../assets/user.png';

const ProfileInfo = ({ onSendAlert, onDeleteUser }) => {
    return (
        <div className="profile-info">
            <img src={userImage} alt="Profile" className="profile-pic" />
            <div className="profile-details">
                <h2>FAREZLEO</h2>
                <p>Faraz Ahmed</p>
                <p>"Are you trying to follow me? I see you reading my bio here."</p>
                <div className="profile-stats">
                    <span>20k Followers</span>
                    <span>20k Following</span>
                    <span>200 Posts</span>
                </div>
            </div>
            <div className="profile-actions">
                <button className="btn btn-primary" onClick={onSendAlert}>Send Alert</button>
                <button className="btn btn-danger" onClick={onDeleteUser}>Delete Users</button>
            </div>
        </div>
    );
};

export default ProfileInfo;
