import React from 'react';

const TableOfContents = () => {
    return (
        <div className="toc-section">
            <h2>📋 Table of Contents</h2>
            <ul className="toc-list">
                <li className="toc-item">
                    <span>1. Executive Summary</span>
                    <span className="toc-page">Page 3</span>
                </li>
                <li className="toc-item">
                    <span>2. Technology Solutions Overview</span>
                    <span className="toc-page">Page 4</span>
                </li>
                <li className="toc-item">
                    <span>3. Detailed Service Breakdown</span>
                    <span className="toc-page">Page 5</span>
                </li>
                {/* <li className="toc-item">
                    <span>4. Pricing & Packages</span>
                    <span class="toc-page">Page 6</span>
                </li> */}
                <li className="toc-item">
                    <span>4. Implementation Timeline</span>
                    <span className="toc-page">Page 7</span>
                </li>
                <li className="toc-item">
                    <span>5. Why Choose Us</span>
                    <span className="toc-page">Page 8</span>
                </li>
                <li className="toc-item">
                    <span>6. Next Steps</span>
                    <span className="toc-page">Page 9</span>
                </li>
            </ul>
        </div>
    );
};

export default TableOfContents;
