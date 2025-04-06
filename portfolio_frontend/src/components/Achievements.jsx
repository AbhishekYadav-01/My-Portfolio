import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const achievements = [
  {
    title: "SPEIC’24 Fastcode Challenge",
    description: "As part of the SPEIC'24 BFS Optimization Challenge, I developed an optimized parallel Breadth-First Search (BFS) algorithm using the Compressed Sparse Row (CSR) format to improve memory efficiency and scalability. By leveraging multi-threaded parallelization, efficient workload distribution, and memory-aware traversal techniques, the implementation achieved a 20.5× weighted speedup over the baseline. The solution was ranked in the Top 10 across multiple large-scale graph datasets, with a best performance of 9th place on the largest dataset, containing 87.0 million vertices and 112.9 million edges, demonstrating strong capabilities in high-performance computing and large-scale graph processing.",
    year: "2025",
    icon: "🏆",
    githubLink: "https://github.com/AbhishekYadav-01/FastCode-Programming-Challenge" // Added GitHub link
  },
  {
    title: "Research Work : Deep Learning for Drug Repurposing",
    description: "I’ve always been fascinated by the intersection of AI and healthcare, so I was thrilled to help build a graph‑based framework that finds new uses for existing drugs. We merged drug‑target, protein‑protein, and disease‑association data from DrugBank, BindingDB, and STRING into one knowledge graph, then trained Graph Convolutional and Graph Attention Networks to predict novel drug–disease links. The model delivered strong AUC‑ROC and precision‑recall scores, and we validated its top predictions against FDA‑approved repurposed drugs and published studies. It was incredibly rewarding to see our work—titled “Graph Based AI for Fast Tracking Drug Repurposing”—accepted at ICMI 2025.",
    year: "2025",
    icon: "🔬",
    Link: "https://drive.google.com/file/d/1M0iAsvuCPdse6OISJfooKDUPta3lfCMG/view"  // Added GitHub link
  },
  {
    "title": "CodeChef 3-Star Rating",
    "description": "Demonstrated consistent problem-solving skills and algorithmic thinking by achieving a 3-Star rating (1696) on CodeChef, with successful participation in five rated contests.",
    "year": "2024",
    "icon": "💻",
    profileLink: "https://www.codechef.com/users/abhi_shek95" // Added Profile link
  }
,  
  {
    title: "Secured Rank 1 in Data Analysis",
    description: "Earning the top rank in the Design and Analysis of Experiments course reflects the depth with which I engaged with advanced mathematical concepts such as statistical theory, probability, linear regression, analysis of variance, and factorial designs. Throughout the course, I applied complex mathematical models and statistical techniques to analyze experimental data and design efficient experiments. This hands-on experience not only reinforced my understanding of these principles but also honed my analytical and problem-solving skills.",
    year: "2024",
    icon: "🎓"
  },

  {
    title: "IIT JEE Mains and Advanced",
    description: "Secured a position at IIT by cracking JEE Mains and JEE Advanced, achieving a rank in the top 2% among over a million students in India’s highly competitive engineering entrance exams.",
    year: "2022",
    icon: "📚"
  }
];

const Achievements = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="achievements-section py-5"
    >
      <Container>
        <h2 className="section-title mb-5">Achievements</h2>
        <Row className="g-4">
          {achievements.map((achievement, index) => (
            <Col key={index} lg={6} md={6}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="achievement-card p-4"
              >
                <div className="d-flex align-items-start">
                  <span className="achievement-icon me-3" style={{ fontSize: '2rem' }}>
                    {achievement.icon}
                  </span>
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="achievement-title mb-0">{achievement.title}</h3>
                      <span className="achievement-year" style={{ fontWeight: 'bold', color: 'white' }}>
                        {achievement.year}
                      </span>
                    </div>
                    <p className="achievement-description">{achievement.description}</p>
                    {achievement.Link && (
                      <motion.a 
                        href={achievement.Link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="achievement-github"
                        style={{
                          display: 'inline-block',
                          padding: '6px 12px',
                          borderRadius: '9999px',
                          background: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          marginTop: '0.5rem'
                        }}
                        whileHover={{ color: '#ADD8E6' }}
                      >
                        GitHub Link
                      </motion.a>
                    )}
                    {achievement.profileLink && (
                      <motion.a 
                        href={achievement.profileLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="achievement-profile"
                        style={{
                          display: 'inline-block',
                          padding: '6px 12px',
                          borderRadius: '9999px',
                          background: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          marginTop: '0.5rem'
                        }}
                        whileHover={{ color: '#ADD8E6' }}
                      >
                        Profile Link
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Achievements;