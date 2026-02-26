import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <motion.div
            id="about"
            className="about container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
                <div className="about-text">
                    <section className="about-section">
                        <h3>Who I Am</h3>
                        <p>
                            Entry-Level Full-Stack Developer with hands-on experience building responsive web applications using React.js, JavaScript, and Node.js.
                            Strong understanding of frontend–backend integration, REST APIs, and modern web development practices.
                        </p>
                        <p>
                            Passionate about writing clean, scalable code and continuously enhancing technical skills. My goal is to build digital experiences
                            that are not only functional but also intuitive and performant.
                        </p>
                    </section>

                    <div className="education">
                        <h3>Education</h3>
                        <div className="edu-grid">
                            <div className="edu-item">
                                <h4>Bachelor of Technology (2023 – 2027)</h4>
                                <p className="edu-dept">Information Technology | Bannari Amman Institute of Technology</p>
                                <span className="edu-score">CGPA: 7.78</span>
                            </div>
                            <div className="edu-item">
                                <h4>Higher Secondary Education (2021 – 2023)</h4>
                                <p className="edu-dept">Saratha Matric Higher Secondary School</p>
                                <span className="edu-score">Percentage: 93.3%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br /><br />
        </motion.div>
    );
};

export default About;
