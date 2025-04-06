import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Achievements from '../components/Achievements';

const PortfolioPage = ({ section }) => {
  const [data, setData] = useState({
    aboutMe: null,
    projects: [],
    skills: [],
    experience: [],
    education: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/about-me/'),
          axios.get('http://127.0.0.1:8000/api/projects/'),
          axios.get('http://127.0.0.1:8000/api/skills/'),
          axios.get('http://127.0.0.1:8000/api/experience/'),
          axios.get('http://127.0.0.1:8000/api/education/')
        ]);
        
        console.log("Fetched Projects Data:", responses[1].data); // Log projects data
        
        setData({
          aboutMe: responses[0].data,
          projects: responses[1].data,
          skills: responses[2].data,
          experience: responses[3].data,
          education: responses[4].data
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  if (!data.aboutMe) return <div>Loading...</div>;

  // Determine which section to display
  const renderSection = () => {
    switch (section) {
      case 'about-me':
        return <AboutMe data={data.aboutMe} />;
      case 'projects':
        return <Projects data={data.projects} />;
      case 'skills':
        return <Skills data={data.skills} />;
      case 'experience':
        return <Experience data={data.experience} />;
      case 'education':
        return <Education data={data.education} />;
      case 'contact':
        return <Contact />;
      // Added Achievements case
      case 'achievements':
        return <Achievements />;
      default:
        return (
          <>
            <AboutMe data={data.aboutMe} />
            <Projects data={data.projects} />
            <Skills data={data.skills} />
            <Experience data={data.experience} />
            <Education data={data.education} />
            <Achievements />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="portfolio-container">
      <div className="stars"></div>

      <div 
        className="nav-ellipse"
        style={{ 
          position: 'fixed',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', // Ensure items are vertically centered
          flexWrap: 'nowrap', // Prevent wrapping to keep buttons in a single row
          gap: '10px', 
          padding: '10px 10px', 
          background: 'rgba(255, 255, 255, 0.2)', // Transparent background
          backdropFilter: 'blur(250px)', // Add blur effect
          borderRadius: '500px',  // High borderRadius creates an ellipse
          zIndex: 1000,
          overflowX: 'auto' // Allow horizontal scrolling if content overflows
        }}
      >
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Home
        </Link>
        <Link 
          to="/about-me" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '1px solid white'
          }}
        >
          About Me
        </Link>
        <Link 
          to="/projects" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Projects
        </Link>
        <Link 
          to="/skills" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Skills
        </Link>
        <Link 
          to="/experience" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Experience
        </Link>
        <Link 
          to="/education" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Education
        </Link>
        <Link 
          to="/achievements" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Achievements
        </Link>
        <Link 
          to="/contact" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Contact
        </Link>
        <Link 
          to="/chat" 
          style={{ 
            color: 'white', 
            padding: '5px 8px', // updated padding
            borderRadius: '500px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            border: '2px solid white'
          }}
        >
          Chat/talk with My Profile
        </Link>
      </div>

      {/* Render the selected section */}
      <Container className="mt-5 pt-4">
        {renderSection()}
      </Container>
    </div>
  );
};

export default PortfolioPage;