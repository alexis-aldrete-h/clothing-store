import React from 'react';

import './Footer.css';

const Footer = () => {
    return(
    <div className='footer'>
        <div className="footer-top">
            <div className="slogan">
                <h6>Suspicious Antwerp</h6>
                <h4>Never ever live a boring day.</h4>
            </div>
            <div className="useful-links">
                <h6 className='footer-nav-title'>Useful Links</h6>
                <nav className='footer-nav'>
                    <span><a href='#action1'>Terms and Conditions</a></span>
                    <span><a href='#action2'>Help Center</a></span>
                    <span><a href='#action3'>Careers</a></span>
                    <span><a href='#action4'>Privacy</a></span>
                </nav>
            </div>
            <div className="socials">
                <h6 className='footer-nav-title'>Socials</h6>
                <nav className='footer-nav'>
                    <span><a href='#action1'>Terms and Conditions</a></span>
                    <span><a href='#action2'>Help Center</a></span>
                    <span><a href='#action3'>Careers</a></span>
                    <span><a href='#action4'>Privacy</a></span>
                </nav>
            </div>
        </div>
    </div>
    )
}

export default Footer;