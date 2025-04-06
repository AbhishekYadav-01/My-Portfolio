import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const contacts = [
    { icon: <FiMail size={24} />, href: 'mailto:abhishekiitj95@gmail.com', tooltip: 'Email' },
    { icon: <FiPhone size={24} />, href: 'tel:+919555673314', tooltip: 'Phone' },
    { icon: <FiLinkedin size={24} />, href: 'https://www.linkedin.com/in/abhishek-yadav-9156a229b/', tooltip: 'LinkedIn' },
    { icon: <FiInstagram size={24} />, href: 'https://www.instagram.com/abhishekyadav_prgrj', tooltip: 'Instagram' },
    { icon: <FiGithub size={24} />, href: 'https://github.com/AbhishekYadav-01', tooltip: 'GitHub' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact"
      style={{
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        color: 'white',
        maxWidth: '800px',
        margin: '80px auto',
        textAlign: 'center'
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact Me</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        Click on one of the icons below to reach out:
      </p>
      <ul style={{ display: 'flex', justifyContent: 'center', gap: '1rem', listStyle: 'none', padding: 0 }}>
        {contacts.map((contact, index) => (
          <li key={index}>
            <motion.a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid white',
                borderRadius: '9999px',
                padding: '12px',
                width: '50px',
                height: '50px'
              }}
              title={contact.tooltip}
            >
              {contact.icon}
            </motion.a>
          </li>
        ))}
      </ul>
      <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
        Looking forward to hearing from you!
      </p>
    </motion.section>
  );
};

export default Contact;