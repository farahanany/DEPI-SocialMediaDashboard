import React from 'react';
import '../styles/PostsGrid.css';

const PostsGrid = ({ posts }) => {
  return (
    <div className="posts-grid">
      {posts.map(post => (
        <div className="post" key={post.id}>
          <img src={post.image || 'default-post-image-url'} alt="Post" className="post-image" />
          <div className="post-details">
            <p>{post.title}</p>
            <span>{post.likes} Likes</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
