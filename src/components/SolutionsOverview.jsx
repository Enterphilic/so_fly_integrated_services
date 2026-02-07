import React from 'react';

const SolutionsOverview = () => {
    return (
        <div className="section">
            <div className="section-header">
                <span className="section-number">2</span>
                <h2 className="section-title">Technology Solutions Overview</h2>
            </div>

            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon">💻</div>
                    <h3>Point of Sale (POS) System</h3>
                    <p>Complete POS solution for seamless order management and payment processing</p>
                    <ul className="service-features">
                        <li>Cloud-based POS software</li>
                        <li>Real-time inventory tracking</li>
                        <li>Multiple payment methods</li>
                        <li>Kitchen display system (KDS)</li>
                        <li>Table management</li>
                        <li>Staff management & tracking</li>
                    </ul>
                </div>

                <div className="service-card">
                    <div className="service-icon">🌐</div>
                    <h3>Website & Online Ordering</h3>
                    <p>Professional website with integrated online ordering and reservations</p>
                    <ul className="service-features">
                        <li>Custom responsive website design</li>
                        <li>Online menu management</li>
                        <li>Table reservation system</li>
                        <li>Online food ordering</li>
                        <li>Payment gateway integration</li>
                        <li>SEO optimization</li>
                    </ul>
                </div>

                <div className="service-card">
                    <div className="service-icon">📱</div>
                    <h3>Digital Marketing & Social Media</h3>
                    <p>Build your brand and attract customers through digital channels</p>
                    <ul className="service-features">
                        <li>Social media management</li>
                        <li>Google My Business setup</li>
                        <li>Email marketing campaigns</li>
                        <li>WhatsApp Business integration</li>
                        <li>Loyalty program setup</li>
                        <li>Content creation & posting</li>
                    </ul>
                </div>

                <div className="service-card">
                    <div className="service-icon">📡</div>
                    <h3>Network & Infrastructure</h3>
                    <p>Reliable, secure network infrastructure for your operations</p>
                    <ul className="service-features">
                        <li>High-speed WiFi installation</li>
                        <li>Guest WiFi with branding</li>
                        <li>Network security & firewall</li>
                        <li>CCTV system integration</li>
                        <li>Sound system setup</li>
                        <li>Digital menu boards</li>
                    </ul>
                </div>
                {/* 
                <div className="service-card">
                    <div className="service-icon">🎵</div>
                    <h3>Entertainment & Ambiance</h3>
                    <p>Create the perfect atmosphere with audiovisual technology</p>
                    <ul className="service-features">
                        <li>Music streaming setup</li>
                        <li>TV/Screen installation</li>
                        <li>Smart lighting control</li>
                        <li>Digital signage</li>
                        <li>Event booking system</li>
                        <li>Live performance tech support</li>
                    </ul>
                </div> */}

                <div className="service-card">
                    <div className="service-icon">🔧</div>
                    <h3>Ongoing Support & Maintenance</h3>
                    <p>24/7 technical support and system maintenance</p>
                    <ul className="service-features">
                        <li>24/7 helpdesk support</li>
                        <li>Regular software updates</li>
                        <li>Hardware maintenance</li>
                        <li>System monitoring</li>
                        <li>Staff training sessions</li>
                        <li>Monthly performance reports</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SolutionsOverview;
