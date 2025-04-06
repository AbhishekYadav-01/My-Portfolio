import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { FaBriefcase } from 'react-icons/fa';

const Experience = ({ data }) => {
  if (!data || data.length === 0) return <div>No experience available</div>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="experience-section"
    >
      <Container>
        <h2 className="section-title mb-5">Professional Journey</h2>
        <div className="timeline">
          {data.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="timeline-marker">
                <FaBriefcase className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <h3 className="position">{exp.position}</h3>
                <div className="company">{exp.company}</div>
                <div className="duration">{exp.start_date} - {exp.end_date || 'Present'}</div>
                <p className="description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
};

export default Experience;