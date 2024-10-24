import React, { useState } from 'react';
import '../styles/PostsGrid.css';
import postImage1 from '../assets/post (3).png';
import postImage2 from '../assets/post (5).png';
import postImage3 from '../assets/post (6).png';

const PostsGrid = () => {
    const [likedPosts, setLikedPosts] = useState(Array(3).fill(false));

    const handleLikeToggle = (index) => {
        const updatedLikes = [...likedPosts];
        updatedLikes[index] = !updatedLikes[index];
        setLikedPosts(updatedLikes);
    };

    const postImages = [postImage1, postImage2, postImage3];

    return (
        <div className="posts-grid">
            {postImages.map((image, index) => (
                <div className="post" key={index}>
                    <img src={image} alt="Post" />
                    <div className="post-details">
                        <p>Faraz Ahmed &nbsp;&nbsp; 10:30 AM &nbsp;&nbsp; 200 likes</p>
                        <button className="like-button" onClick={() => handleLikeToggle(index)}>
                            <span className="material-icons">
                                {likedPosts[index] ? 'favorite' : 'favorite_border'}
                            </span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostsGrid;
