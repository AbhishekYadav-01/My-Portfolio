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
      default:
        return (
          <>
            <AboutMe data={data.aboutMe} />
            <Projects data={data.projects} />
            <Skills data={data.skills} />
            <Experience data={data.experience} />
            <Education data={data.education} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="portfolio-container">
      {/* Starry Sky Background */}
      <div className="stars"></div>

      {/* Bootstrap Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-items-start">
              {/* My Portfolio - Leftmost */}
              <Nav.Link 
                as={Link} 
                to="/" 
                className="nav-link-custom me-4 fw-bold" 
                style={{ fontSize: '1rem', marginRight: '750px' }}
              >
                Home
              </Nav.Link>

              {/* Other Links with Custom Gaps */}
              <Nav.Link as={Link} to="/about-me" className="nav-link-custom" style={{ marginRight: '15px' }}>About Me</Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link-custom" style={{ marginRight: '15px' }}>Projects</Nav.Link>              <Nav.Link as={Link} to="/skills" className="nav-link-custom me-2">Skills</Nav.Link>
              <Nav.Link as={Link} to="/experience" className="nav-link-custom me-4">Experience</Nav.Link>
              <Nav.Link as={Link} to="/education" className="nav-link-custom me-1">Education</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sticky Chat Button */}
      <Button
        as={Link}
        to="/chat"
        variant="primary"
        className="sticky-chat-button"
      >
        Chat/Voice Chat
      </Button>

      {/* Render the selected section */}
      <Container className="mt-5 pt-4">
        {renderSection()}
      </Container>
    </div>
  );
};

export default PortfolioPage;