import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

const Skills = ({ data }) => {
  if (!data || data.length === 0) return <div>No skills available</div>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="skills-section"
    >
      <Container>
        <h3 className="section-title mb-5">Technical Skills</h3>
        <div className="skills-grid">
          {data.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-rectangle" style={{
                background: 'rgba(221, 218, 226, 0.2)',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: 'center',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',   // fixed width
                height: '15px'   // fixed height
              }}>
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Skills;