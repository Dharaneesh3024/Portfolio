import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const categories = [
        {
            title: 'Programming Languages',
            skills: ['Java', 'Python', 'JavaScript', 'C'],
        },
        {
            title: 'Frontend Development',
            skills: ['React.js', 'HTML5', 'CSS3'],
        },
        {
            title: 'Backend & Frameworks',
            skills: ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'Node.js', 'Express.js'],
        },
        {
            title: 'Databases',
            skills: ['MySQL', 'MongoDB'],
        },
        {
            title: 'Tools & Technologies',
            skills: ['Git', 'GitHub', 'Maven', 'Postman', 'REST APIs', 'JWT Authentication', 'VS Code'],
        },
        {
            title: 'Areas of Interest',
            skills: ['Full Stack Development', 'Problem Solving', 'Blender'],
        },
    ];

    return (
        <motion.div
            id="experience"
            className="experience container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">Skills & Experience</h2>

            <div className="experience-categories">
                {categories.map((cat, idx) => (
                    <motion.div
                        className="category-card glass"
                        key={cat.title}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3>{cat.title}</h3>
                        <div className="skills-badges">
                            {cat.skills.map(skill => (
                                <span className="skill-badge" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <br /><br /><br />
        </motion.div>
    );
};

export default Experience;
