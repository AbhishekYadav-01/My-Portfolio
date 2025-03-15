import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ data }) => {
  if (!data || data.length === 0) return <div>No projects available</div>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="projects"
    >
      <h2>Projects</h2>
      {data.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="project-item"
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.image && <img src={project.image} alt={project.title} />}
          {project.link && <a href={project.link}>View Project</a>}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;