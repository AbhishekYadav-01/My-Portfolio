import React from 'react';
import { motion } from 'framer-motion';
import { FiDownloadCloud, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import profileImage from '../assets/profilePick.jpeg.jpg';
const AboutMe = () => {
  // Function to calculate experience
  const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  // Start date
  const startDate = "2024-10-20"; // Start date in YYYY-MM-DD format
  const { years, months } = calculateExperience(startDate);

  // Hardcoded data
  const data = {
    bio: "I’m a B.Tech student with major in Computer Science at IIT Jodhpur, passionate about trading strategies, AI/ML, and software engineering. I love tackling complex problems, optimizing algorithms, and leveraging quantitative analysis to build data-driven solutions.",
    experience: { years, months }, // Dynamic experience
    resume: "https://drive.google.com/file/d/1ZfvjH43wCGao9b0Zu5Vx8Q8xu6z084NO/view?usp=sharing", // Replace with your resume link
    github: "https://github.com/AbhishekYadav-01", // Replace with your GitHub link
    linkedin: "https://www.linkedin.com/in/abhishek-yadav-9156a229b/", // Replace with your LinkedIn link
    email: "abhishekiti95@gmail.com", // Replace with your email
    phone: "+91 95556 73314" // Replace with your phone number
  };

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

        {/* Content Container with Glassmorphism Effect */}
        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          // Removed hover scale to prevent blurring (was: whileHover={{ scale: 1.02 }})
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="content-container glass-card"
        >
          <h1 className="title">Hi, I’m Abhishek Yadav</h1>
          
          <div className="bio-section">
            <p className="bio-text">{data.bio}</p>

            <div className="highlight-section">
              <div className="highlight-card">
                <span className="highlight-text">Professional Experience</span>
                <span className="highlight-number">
                  {data.experience.years} years {data.experience.months} months
                </span>
              </div>
            </div>

            <div className="action-buttons">
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="download-btn"
                href={data.resume}  // Link to your resume file
                target="_blank"
                rel="noopener noreferrer"
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
                <a href={`tel:${data.phone}`}>
                  <FiPhone className="social-icon" />
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