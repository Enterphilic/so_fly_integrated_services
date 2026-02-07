import React from 'react';

const Timeline = () => {
    return (
        <div className="section">
            <div className="section-header">
                <span className="section-number">4</span>
                <h2 className="section-title">Implementation Timeline</h2>
            </div>

            <p className="intro-text">
                Professional package implementation typically takes 4-6 weeks from contract signing to go-live.
            </p>

            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h4>Phase 1: Planning & Setup</h4>
                        <div className="timeline-duration">Week 1-2</div>
                        <p>Site assessment, network infrastructure setup, hardware procurement and installation, initial configuration</p>
                    </div>
                    <div className="timeline-marker"></div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <h4>Phase 2: Software Configuration</h4>
                        <div className="timeline-duration">Week 2-3</div>
                        <p>POS system setup, menu digitization, website development, payment gateway integration, online ordering setup</p>
                    </div>
                    <div className="timeline-marker"></div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <h4>Phase 3: Testing & Training</h4>
                        <div className="timeline-duration">Week 4-5</div>
                        <p>System testing, staff training sessions, workflow optimization, final adjustments based on feedback</p>
                    </div>
                    <div className="timeline-marker"></div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <h4>Phase 4: Go Live & Support</h4>
                        <div className="timeline-duration">Week 6+</div>
                        <p>Official launch, on-site support during first week, monitoring and optimization, ongoing technical support</p>
                    </div>
                    <div className="timeline-marker"></div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
