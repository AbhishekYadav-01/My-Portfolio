import React from 'react';
import { motion } from 'framer-motion';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = {
    softwareEngineering: [
      {
        title: "Automated Trading System with Broker Integration",
        location: "Softwired",
        date: "Feb - March 2025",    
        description: "Developed an end-to-end automated trading system that integrates TradingView and a custom middleware web platform for seamless broker connectivity and complete trading control. I designed a robust strategy in Pine Script that triggers buy/sell alerts via webhooks, instantly communicating with our middleware. This platform securely logs into Angle One Broker using dynamic credentials and enables real-time order execution, with full dashboard control to start, stop, and manage the trading tool. Additionally, I implemented a paper trading feature within the user dashboard for risk-free strategy testing, and deployed the entire solution on AWS to ensure scalability and reliability.",
        technologies: ["Reactjs", "Django", "Pine script", "API", "celery", "Trading Strategy", "Paper Trade", "AWS", "Websocket", "DBMS", "OS", "Async", "Redis", "asyncio"],
        github: "https://github.com/AbhishekYadav-01/Automated-Trading-System-with-Broker-Integration"
      },
      {
        title: "My Portfolio with AI Chatbot",
        location: "Self Project",
        date: "March-April 2025",
        description: "Developed a full-stack interactive portfolio using React.js and Django to showcase my technical expertise and professional journey. The platform features a dynamic frontend with Framer Motion animations and a glassmorphism-inspired UI, coupled with a Django REST API backend for seamless data management. A standout feature is the AI-powered chatbot integrated with Groq API and FAISS, enabling visitors to query about me through natural language, enhanced with voice interaction capabilities using speech recognition and text-to-speech. Projects are systematically categorized into Software Engineering, Machine Learning, and Other domains, each detailing technologies used and key contributions. The entire system is deployed on Vercel (React) for the frontend and Railway (Django) for the backend, demonstrating end-to-end development and deployment proficiency.",
        technologies: ["React.js", "Django", "Full-Stack Development", "Framer Motion", "Django REST API", "AI Chatbot", "Groq API", "FAISS", "Speech Recognition", "Text-to-Speech", "Natural Language Processing", "API Integration", "Dynamic Frontend", "Backend Hosting", "Interactive UI"]        ,
        github: "https://github.com/AbhishekYadav-01/My-Portfolio"
      },
      {
        title: "Infectious Virus Detection System",
        location: "Self Project",
        date: "Nov 2024",    
        description: "Developed an System in which Implemented signature-based file scanning and process monitoring using Linux system calls and APIs. Leveraged machine learning models to enhance detection accuracy and adaptability for identifying malicious behaviors. Integrated real-time alerts and logging for effective threat response.",
        technologies: ["C", "Ubuntu", "Signature-based detection", "File scanning", "Process monitoring", "Parallel programming", "Threat log"],
        github: "https://github.com/AbhishekYadav-01/Infectious-Virus-Detection-System/tree/main/Ubuntu"
      },
      {
        title: "Metro Navigator",
        location: "Self Project",
        date: "Nov 2023",
        description: "Developed a C++ Metro Navigator software for Delhi Metro, utilizing AVL trees for managing metro stations and identifying junctions. Implemented a pathfinding algorithm for optimal route planning and fare calculation across multiple lines. The system supports real-time data retrieval, ensuring efficient navigation and handling of large datasets with minimal computational overhead.",
        technologies: ["C++", "OOPs", "Data Structures", "Algorithm", "AVL Trees", "file handling", "Linked List", "Queues"],
        github: "https://github.com/AbhishekYadav-01/Metro-Navigator"
      },
      {
        title: "JourneyPlanner: Trip Management System",
        location: "Self Project",
        date: "Oct 2023",
        description: "Developed a C++ Journey Planner for creating and managing bus trips, featuring functionalities to add new trips with specified parameters etc. Implemented a Tree structure indexed by departure time for optimized trip organization. Centralized trip management through the TravelDesk class, enabling comprehensive trip viewing and booking capabilities. Applied Tree data structures and OOP principles for efficient operations.",
        technologies: ["C++", "OOPs", "Data Structures", "Algorithm", "BST", "file handling", "Polymorphism", "STL", "Encapsulation"],
        github: "https://github.com/AbhishekYadav-01/JourneyPlanner-Trip-Management-System"
      }
    ],
    mlProjects: [
      {
        title: "Deep Learning-based Language Translation",
        location: "Self Project",
        date: "March 2025",
        description: "I developed a machine translation system to convert English into German using deep learning techniques. I explored different model architectures—including a Transformer, an LSTM-based encoder-decoder with attention, and a convolutional sequence-to-sequence approach—to determine which one offered the best performance on the WMT14 dataset. By applying methods such as subword tokenization and attention visualization, and evaluating the models with BLEU scores, I was able to fine-tune the system for improved translation accuracy and speed.",
        technologies: ["Machine Translation", "Deep Learning", "Transformer Model", "LSTM Encoder-Decoder", "Attention Mechanism", "Convolutional Seq2Seq", "Subword Tokenization", "Neural Network Design", "Natural Language Processing"],
        github: "https://github.com/AbhishekYadav-01/Deep-Learning-based-Language-Translation"
      },
      {
        title: "Spam SMS Detection",
        location: "Initial Self leaning Project",
        date: "May 2024",
        description: "Developed an advanced AI model utilizing machine learning techniques to address the pervasive issue of spam SMS messages. Implemented and fine-tuned both Logistic Regression and SVM linear models, achieving an impressive accuracy rate of 98 % across various evaluation metrics. The model’s robust performance was underscored by its ability to effectively differentiate between spam and legitimate messages using the TF-IDF approach combined with Logistic Regression.",
        technologies: ["Machine Learning", "Logistic Regression", "SVM", "TF-IDF", "Model Tuning", "Evaluation Metrics"],
        github: "https://github.com/AbhishekYadav-01/Encryptix/tree/main/SPAM_SMS_DETECTION"
      },
      {
        title: "Customer Churn Prediction",
        location: "Initial Self leaning Project",
        date: "May 2024",
        description: "I built a machine learning model to predict customer churn for a subscription-based service. I started by preprocessing customer data—encoding categorical variables and scaling numerical features—to prepare it for analysis. Then, I experimented with multiple algorithms, including Logistic Regression, Random Forest, and Gradient Boosting, to identify the best approach for detecting churn. Evaluating the models through accuracy scores and detailed classification reports allowed me to gain valuable insights, with Gradient Boosting emerging as the most effective method. The best result was achieved using the Gradient Boosting model, which attained an accuracy of 87.12%, demonstrating its effectiveness in predicting customer churn and informing retention strategies.",
        technologies: ["Machine Learning", "Data Preprocessing", "Feature Encoding", "Logistic Regression", "Random Forest", "Gradient Boosting", "Model Evaluation", "Accuracy Score", "Classification Report"],
        github: "https://github.com/AbhishekYadav-01/Encryptix/tree/main/CUSTOMER%20CHURN%20PREDICTION"
      },
      {
        title: "Movie Genre Classification",
        location: "Initial Self leaning Project",
        date: "June 2024",
        description: "I developed a machine learning model to classify movie genres based on plot summaries. I preprocessed the textual data using TF-IDF vectorization and experimented with various classifiers such as Logistic Regression, Naive Bayes, Random Forest, and multiple SVM variants. By applying cross-validation and hyperparameter tuning, I was able to evaluate the strengths and weaknesses of each model through accuracy, precision, recall, and F1-score metrics.",
        technologies: ["Machine Learning", "TF-IDF Vectorization", "Logistic Regression", "Naive Bayes", "Random Forest", "Support Vector Machine (SVM)", "Hyperparameter Tuning", "Cross-Validation", "Model Evaluation", "Precision", "Recall", "F1-Score", "Multi-Class Classification"],
        github: "https://github.com/AbhishekYadav-01/Encryptix/tree/main/MOVIE%20GENRE%20%20CLASSIFICATION"
      },
      {
        title: "Virtual Object Placement (AR-like)",
        location: "Self Project",
        date: "April 2025",
        description: "Ongoing project for computer vision-based virtual object interaction in real images.",
        technologies: ["Computer Vision", "Deep Learning"],
        github: "https://github.com/AbhishekYadav-01/Virtual-Object-Placement-AR-like-"
      }
    ],
    otherProjects: [
      {
        title: "Factorial Data Analysis: ANOVA & Regression",
        location: "Group Project",
        date: "March-April 2024",
        description: "I designed and executed a factorial experiment to investigate how factors like release height, ball type, surface, and fan operation affect the bouncing time of various balls. I collected and created data through controlled experiments, then performed ANOVA and regression analysis—using both manual calculations and computational libraries—to identify significant factors and interactions. This comprehensive approach not only validated the importance of height, ball type, and surface in influencing bouncing time but also helped develop data-driven recommendations for performance optimization.",
        technologies: ["Factorial Design", "ANOVA", "Regression Analysis", "Experimental Data", "Design Matrix", "Interaction Effects", "Hypothesis Testing", "Data Collection"],
        github: "https://github.com/AbhishekYadav-01/Factorial-Data-Analysis-ANOVA-Regression"
      },
      {
        title: "Long-Range Wireless Communication System using LoRa",
        location: "Self Project",
        date: "March-April 2024",
        description: "I developed a communication system using LoRa technology to enable long-range, low-power data transmission without relying on the internet. The project involved designing and implementing mid-range (up to 2 km) transceivers capable of Line-of-Sight (LoS) communication. I also created an interface circuit to facilitate data transfer from multiple analog sensors, including temperature, ultrasonic distance, and ECG sensors. By testing the system under real-world conditions, I analyzed the impact of distance on packet loss and optimized the setup for improved transmission reliability.",
        technologies: ["LoRa Communication", "Wireless Transmission", "Low-Power Wide-Area Network (LPWAN)", "Embedded Systems", "Sensor Interface Circuit", "Analog Sensors", "Temperature Sensor", "Ultrasonic Sensor", "ECG Sensor", "IoT Applications", "Data Transmission", "Packet Loss Analysis", "Long-Range Networking"],
        github: "https://github.com/AbhishekYadav-01/Long-Range-Communication"
      }
    ]
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="projects-section py-5"
    >
      <Container>
        <h2 className="section-title text-center mb-5">My Projects</h2>

        {/* Software Engineering Projects */}
        <h3 className="project-category-title mb-4">Software Engineering Projects : </h3>
        <Row className="g-4 mb-5">
          {projects.softwareEngineering.map((project, index) => (
            <Col key={index} lg={6} xl={4}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="project-card h-100 border-0 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Card.Title className="project-title">{project.title}</Card.Title>
                      <div className="project-meta text-end">
                        <div>{project.location}</div>
                        <div>{project.date}</div>
                      </div>
                    </div>
                    <Card.Text className="project-description flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="tech-stack mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag me-2 mb-2">{tech}</span>
                      ))}
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link align-self-start"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub className="me-2" /> View on GitHub
                    </motion.a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Machine Learning Projects */}
        <h3 className="project-category-title mb-4">Machine Learning Projects :</h3>
        <Row className="g-4 mb-5">
          {projects.mlProjects.map((project, index) => (
            <Col key={index} lg={6} xl={4}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="project-card h-100 border-0 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Card.Title className="project-title">{project.title}</Card.Title>
                      <div className="project-meta text-end">
                        <div>{project.location}</div>
                        <div>{project.date}</div>
                      </div>
                    </div>
                    <Card.Text className="project-description flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="tech-stack mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag me-2 mb-2">{tech}</span>
                      ))}
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link align-self-start"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub className="me-2" /> View on GitHub
                    </motion.a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Other Projects */}
        <h3 className="project-category-title mb-4">Other Projects :</h3>
        <Row className="g-4">
          {projects.otherProjects.map((project, index) => (
            <Col key={index} lg={6} xl={4}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="project-card h-100 border-0 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Card.Title className="project-title">{project.title}</Card.Title>
                      <div className="project-meta text-end">
                        <div>{project.location}</div>
                        <div>{project.date}</div>
                      </div>
                    </div>
                    <Card.Text className="project-description flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="tech-stack mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag me-2 mb-2">{tech}</span>
                      ))}
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link align-self-start"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub className="me-2" /> View on GitHub
                    </motion.a>
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