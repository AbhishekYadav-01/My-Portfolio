import React from 'react';
import { motion } from 'framer-motion';
import { FiDownloadCloud, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImage from '../assets/profile.jpeg';

const AboutMe = ({ data }) => {
  if (!data) return <div>No data available</div>;

  // Convert skills from comma-separated string to array
  const skillsArray = data.skills ? data.skills.split(',').map(skill => skill.trim()) : [];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="about-container"
    >
      <div className="profile-wrapper">
        {/* Image Container */}
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="image-container"
        >
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-image"
          />
          <div className="image-glow"></div>
        </motion.div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="content-container"
        >
          <h1 className="title">Hi, I’m Abhishek Yadav, a B.Tech student at IIT Jodhpur, passionate about trading automation, AI/ML, and problem-solving, with expertise in building innovative solutions.

{data.name}</h1>
          
          <div className="bio-section">
            <p className="bio-text">{data.bio}</p>
            
            <div className="highlight-section">
              <div className="highlight-card">
                <span className="highlight-number">{data.experienceYears}+</span>
                <span className="highlight-text">Years Experience</span>
              </div>
              <div className="highlight-card">
                <span className="highlight-number">{data.projectsCompleted}+</span>
                <span className="highlight-text">Projects Completed</span>
              </div>
            </div>

            <div className="skills-section">
              {skillsArray.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            <div className="action-buttons">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="download-btn"
                href={data.resume}
                download
              >
                <FiDownloadCloud />
                Download CV
              </motion.a>
              
              <div className="social-links">
                <a href={data.github} target="_blank" rel="noreferrer">
                  <FiGithub className="social-icon" />
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer">
                  <FiLinkedin className="social-icon" />
                </a>
                <a href={`mailto:${data.email}`}>
                  <FiMail className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;