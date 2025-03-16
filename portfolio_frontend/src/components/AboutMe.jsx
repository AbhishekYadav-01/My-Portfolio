import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = ({ data }) => {
  if (!data) return <div>No data available</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="about-me"
    >
      <h2>About Me</h2>
      <p>{data.bio}</p>
      <p>Skills: {data.skills}</p>
      <p>Experience: {data.experience}</p>
    </motion.section>
  );
};

export default AboutMe;