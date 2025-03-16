import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import custom CSS

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <div className="button-group">
          <button
            onClick={() => navigate('/chat')}
            className="home-button chat-button"
          >
            Chat/Voice Chat
          </button>
          <button
            onClick={() => navigate('/portfolio')}
            className="home-button portfolio-button"
          >
            Normal Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;