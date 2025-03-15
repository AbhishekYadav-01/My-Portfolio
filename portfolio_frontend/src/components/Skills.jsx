import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
  if (!data || data.length === 0) return <div>No skills available</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="skills"
    >
      <h2>Skills</h2>
      <ul>
        {data.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <strong>{skill.name}</strong>: {skill.proficiency}%
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;