import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <h1 className="text-6xl font-bold mb-8">Welcome to My Portfolio</h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/chat')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-2xl"
        >
          Chat/Voice Chat
        </button>
        <button
          onClick={() => navigate('/portfolio')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-2xl"
        >
          Normal Portfolio
        </button>
      </div>
    </div>
  );
};

export default HomePage;