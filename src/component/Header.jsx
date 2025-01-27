import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/hod/api/events/');
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <header className="App-header">
      <h1>Welcome to My React Website</h1>
      <h2>Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
