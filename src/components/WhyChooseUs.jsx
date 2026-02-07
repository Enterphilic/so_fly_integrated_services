import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="section">
            <div className="section-header">
                <span className="section-number">5</span>
                <h2 className="section-title">Why Choose Us</h2>
            </div>

            <div className="benefits-grid">
                <div className="benefit-item">
                    <div className="benefit-icon">🏆</div>
                    <h4>Commitment to Excellence</h4>
                    <p>We leverage award-winning technologies and practice industry-standard methodologies to deliver the best results for your business. Our commitment to excellence ensures your satisfaction.</p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon">⏱️</div>
                    <h4>24/7 Support</h4>
                    <p>Our dedicated support team is available around the clock to assist you with any issues or questions you may have, ensuring minimal downtime.</p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon">🛡️</div>
                    <h4>Secure & Reliable</h4>
                    <p>Security is our top priority. We implement robust security measures to protect your data and ensure reliable system performance.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
