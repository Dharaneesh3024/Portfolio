import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} Dharaneesh. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/Dharaneesh3024" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/dharaneesh-a-36275b283/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
                    <a href="https://leetcode.com/u/Dharaneesh_A/" target="_blank" rel="noopener noreferrer" title="LeetCode">LC</a>
                    <a href="https://www.hackerrank.com/profile/dharaneesh3024" target="_blank" rel="noopener noreferrer" title="HackerRank">HR</a>
                    <a href="mailto:dharaneesh3024@gmail.com" title="Email"><FaEnvelope /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
