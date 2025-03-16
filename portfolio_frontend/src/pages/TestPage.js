import React from 'react';
import { motion } from 'framer-motion';

const TestPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
      <div className="text-center">
        <motion.h1 
          className="text-6xl font-extrabold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <div className="flex flex-col space-y-4 items-center">
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl shadow-md transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Chat / Voice Chat
          </motion.button>
          <motion.button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-xl shadow-md transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Normal Portfolio
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;