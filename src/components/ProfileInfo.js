import React from 'react';
import '../styles/ProfileInfo.css';

const ProfileInfo = ({ profile, onSendAlert, onDeleteUser }) => {
  return (
    <div className="profile-info">
      <img src={profile.avatar || 'default-avatar-url'} alt="Profile" className="profile-pic" />
      <div className="profile-details">
        <h2>{profile.name}</h2>
        <p>{profile.bio || '"No bio available"'}</p>
        <div className="profile-stats">
          <span>{profile.followers} Followers</span>
          <span>{profile.following} Following</span>
          <span>{profile.posts} Posts</span>
        </div>
      </div>
      <div className="profile-actions">
        <button className="btn btn-primary" onClick={onSendAlert}>Send Alert</button>
        <button className="btn btn-danger" onClick={onDeleteUser}>Delete User</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
