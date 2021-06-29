import React from 'react';

const StickyFooter = () => {
    return (
        <div className="footer_container">
            <div className="footer_links_container">
            <a className="footer_link" href="/">Home</a>
            <a className="footer_link" href="/portfolio">Portfolio</a>
            <a className="footer_link" href="/about">About</a>
            <a className="footer_link" href="/contact">Contact</a>
            </div>
            
            <p className="footer_copyright">&copy; Seth Green 2021</p>

            <div className="footer_links_container">
                <a className="footer_link" href="https://github.com/wsethgreen">GitHub</a>
                <a className="footer_link" href="https://www.linkedin.com/in/wsethgreen/">LinkedIn</a>
            </div>
            
        </div>
    )
}

export default StickyFooter;
