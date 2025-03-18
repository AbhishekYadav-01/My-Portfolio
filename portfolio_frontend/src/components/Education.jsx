import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ data }) => {
  if (!data || data.length === 0) return <div>No education available</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="education"
    >
      <h2>Education</h2>
      {data.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="education-item"
        >
          <h3>{edu.institution}</h3>
          <p>{edu.degree} in {edu.field_of_study}</p>
          <p>{edu.start_date} to {edu.end_date || 'Present'}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Education;