import React from 'react';

const ExecutiveSummary = () => {
    return (
        <div className="section">
            <div className="section-header">
                <span className="section-number">1</span>
                <h2 className="section-title">Executive Summary</h2>
            </div>

            <p className="intro-text">
                In today's competitive hospitality industry, technology is no longer optional—it's essential. Modern restaurants and lounges require robust, integrated technology solutions to streamline operations, enhance customer experience, and maximize profitability.
            </p>

            <p className="intro-text">
                This proposal outlines a comprehensive technology infrastructure specifically designed for your restaurant and lounge, covering everything from point-of-sale systems to digital marketing, network infrastructure to customer engagement platforms.
            </p>

            <div className="benefits-grid">
                <div className="benefit-item">
                    <div className="benefit-icon">📈</div>
                    <h4>Increase Revenue</h4>
                    <p>Optimize operations and reduce costs by 20-30% through automation</p>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">⚡</div>
                    <h4>Faster Service</h4>
                    <p>Reduce wait times and serve more customers efficiently</p>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">📊</div>
                    <h4>Data Insights</h4>
                    <p>Make informed decisions with real-time analytics and reporting</p>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">🎯</div>
                    <h4>Better Marketing</h4>
                    <p>Reach more customers through digital channels and social media</p>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveSummary;
