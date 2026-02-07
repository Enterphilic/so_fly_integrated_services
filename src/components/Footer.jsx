import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* CTA Section */}
            <div className="cta-section">
                <h2>Ready to Transform Your Business?</h2>
                <p>Let's build the future of your restaurant together.</p>
                {/* <div className="cta-buttons">
                    <button className="cta-button">Get Started</button>
                    <button className="cta-button secondary">Contact Sales</button>
                </div> */}
            </div>

            {/* Contact Info */}
            <div className="contact-section">
                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="icon">📞</div>
                        <h4>Call Us</h4>
                        <p>08034635810</p>
                    </div>
                    <div className="contact-card">
                        <div className="icon">✉️</div>
                        <h4>Email Us</h4>
                        <p>Danieladams227@gmail.com</p>
                    </div>
                    <div className="contact-card">
                        <div className="icon">🏢</div>
                        <h4>Visit Us</h4>
                        <p>20 A, Digital bridge institute, cappa, Oshodi, Lagos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
