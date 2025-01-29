import React from 'react';
import './Contact.css'; // Separate CSS file for styling

function Contact() {
    return (
        <div className="contact-container">
            {/* Left Panel */}
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>📍 23, Avenue de Paris, 75012, Paris</p>
                <p>📧 hello@mikechermartin.com</p>
                <p>💼 mike.chermartin</p>
                <p>📞 +33 619 530 144</p>
                <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">🌐</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">💼</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">🐦</a>
                </div>
            </div>

            {/* Right Panel */}
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <p>Feel free to drop us a line below!</p>
                <form>
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                    />
                    <textarea
                        placeholder="Type your message here..."
                        name="message"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
