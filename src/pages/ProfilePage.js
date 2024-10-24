import React, { useEffect, useState } from 'react';
import ProfileInfo from '../components/ProfileInfo';
import PostsGrid from '../components/PostsGrid';
import Sidebar from '../components/Sidebar'; // Import the Sidebar
import axios from '../utils/axios';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
    // State to store profile and posts data
    const [profile, setProfile] = useState(null);
    const [posts, setPosts] = useState([]);

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch profile data
                const profileRes = await axios.get('/api/profile/1'); // Adjust API endpoint
                setProfile(profileRes.data); // Save profile data

                // Fetch posts data
                const postsRes = await axios.get('/api/posts'); // Adjust API endpoint
                setPosts(postsRes.data); // Save posts data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the function
    }, []); // Empty dependency array ensures this runs only once on mount

    // Send alert and delete user functions
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

    if (!profile) {
        return <div>Loading...</div>; // Show loading until data is fetched
    }

    return (
        <div className="profile-page">
            <Sidebar /> {/* Add the Sidebar */}
            <div className="main-content">
                <ProfileInfo profile={profile} onSendAlert={sendAlert} onDeleteUser={deleteUser} />
                <PostsGrid posts={posts} />
            </div>
        </div>
    );
};

export default ProfilePage;
