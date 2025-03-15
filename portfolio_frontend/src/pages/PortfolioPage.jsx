import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const PortfolioPage = () => {
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

  return (
    <div className="portfolio-container">
      <AboutMe data={data.aboutMe} />
      <Projects data={data.projects} />
      <Skills data={data.skills} />
      <Experience data={data.experience} />
      <Education data={data.education} />
      <Contact />
    </div>
  );
};

export default PortfolioPage;