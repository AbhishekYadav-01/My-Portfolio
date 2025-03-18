import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

const CircularProgress = ({ percentage }) => {
  return (
    <motion.div
      className="progress-circle"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
    >
      <svg width="120" height="120">
        <circle
          className="progress-background"
          cx="60"
          cy="60"
          r="50"
        />
        <circle
          className="progress-bar"
          cx="60"
          cy="60"
          r="50"
          style={{
            strokeDasharray: 314,
            strokeDashoffset: 314 - (314 * percentage) / 100
          }}
        />
        <text x="50%" y="50%" className="progress-text">
          {percentage}%
        </text>
      </svg>
    </motion.div>
  );
};

const Skills = ({ data }) => {
  if (!data || data.length === 0) return <div>No skills available</div>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="skills-section"
    >
      <Container>
        <h2 className="section-title mb-5">Technical Arsenal</h2>
        <div className="skills-grid">
          {data.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <CircularProgress percentage={skill.proficiency} />
              <h3 className="skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Skills;