import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ data }) => {
  if (!data || data.length === 0) return <div>No experience available</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="experience"
    >
      <h2>Experience</h2>
      {data.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="experience-item"
        >
          <h3>{exp.company} - {exp.position}</h3>
          <p>{exp.start_date} to {exp.end_date || 'Present'}</p>
          <p>{exp.description}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience;