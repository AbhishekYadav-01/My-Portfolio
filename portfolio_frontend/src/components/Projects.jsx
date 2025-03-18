import React from 'react';
import { motion } from 'framer-motion';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Projects = ({ data }) => {
  // Handle undefined or invalid data
  if (!data || !Array.isArray(data)) {
    return (
      <div className="text-center text-muted py-5">
        No projects available or data is invalid.
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        No projects to display.
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="projects-section"
    >
      <Container>
        <h2 className="section-title mb-5">Featured Projects</h2>
        <Row className="g-4">
          {data.map((project, index) => (
            <Col key={index} xl={4} lg={6} md={6} className="project-col">
              <motion.div
                whileHover={{ scale: 1.05, rotateZ: 0.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="project-card shadow-lg">
                  {project.image && (
                    <div className="project-image-container">
                      <Card.Img 
                        variant="top" 
                        src={project.image} 
                        className="project-image"
                      />
                      <div className="image-overlay"></div>
                    </div>
                  )}
                  <Card.Body className="project-content">
                    <div className="tech-stack">
                      {project.technologies && project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <Card.Title className="project-title">{project.title || "Untitled Project"}</Card.Title>
                    <Card.Text className="project-description">
                      {project.description || "No description available."}
                    </Card.Text>
                    <div className="project-actions">
                      {project.link && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.link}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fas fa-external-link-alt"></i> Live Demo
                        </motion.a>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Projects;