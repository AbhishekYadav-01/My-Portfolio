import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact"
    >
      <h2>Contact Me</h2>
      <p>Email: example@example.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">Your LinkedIn</a></p>
    </motion.section>
  );
};

export default Contact;