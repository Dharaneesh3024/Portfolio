import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields.');
            return;
        }
        // Simulate form submission
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <motion.div
            id="contact"
            className="contact container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-content">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Feel free to reach out to me for collaborations, job opportunities, or just a friendly chat!</p>

                    <div className="info-item">
                        <FaEnvelope />
                        <span>dharaneesh3024@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <FaPhone />
                        <span>+91 8778625335</span>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt />
                        <span>Tamil Nadu, India</span>
                    </div>
                </div>

                <motion.div
                    className="contact-form glass"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <FaPaperPlane />
                        </button>
                        {status && <p className={`form-status ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</p>}
                    </form>
                </motion.div>
            </div>
            <br />
            <br />
        </motion.div>
    );
};

export default Contact;
