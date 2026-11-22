import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Car Rental Management System',
            description: 'A backend-focused Car Rental Management System developed using Java and Spring Boot to manage cars, customers, branches, and rental operations. Features CRUD operations and REST APIs, MySQL database persistence via Spring Data JPA, rental availability checks to prevent conflicting bookings, and JWT-based authentication and authorization using Spring Security.',
            tech: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'JWT', 'MySQL', 'Maven'],
            github: 'https://github.com/Dharaneesh3024/Car-Rental-Management-System',
            demo: null,
        },
        {
            title: 'AI-Powered Academic Performance Analytics & Personalized Learning Recommendation System',
            description: 'An academic performance analytics platform designed to analyze student academic performance, identify students at academic risk, provide personalized learning recommendations, and deliver interactive dashboards with visual analytics and role-based authentication and management.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
            github: 'https://github.com/Dharaneesh3024/AI-based-Academic-performance-insight',
            demo: 'https://ai-based-academic-performance-insig-three.vercel.app/',
        },
        {
            title: 'ATS-Optimized Resume Builder',
            description: 'AI-assisted resume builder with a chatbot that generates ATS-streamlined bullet points dynamically via REST API.',
            tech: ['React', 'Node.js', 'Express', 'REST API'],
            github: 'https://github.com/Dharaneesh3024/Ats-friendly-resume-generator',
            demo: 'https://resume-generator-frontend-rose.vercel.app/',
        },
        {
            title: 'FindIt – Lost and Found Portal',
            description: 'A web-based portal for students to report and recover lost items within campus. Features seamless user interaction and managed item listings.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
            github: 'https://github.com/Dharaneesh3024/Lost-and-Found',
            demo: 'https://lost-and-found-frontend-two-omega.vercel.app',
        }
    ];

    return (
        <motion.div
            id="projects"
            className="projects container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">My Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card glass"
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map(t => <span key={t}>{t}</span>)}
                            </div>
                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live</a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <br /><br /><br />
        </motion.div>
    );
};

export default Projects;
