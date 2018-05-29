require('./Header.scss');

import React from 'react';

const Header = () => (
    <header>
        <div className="HeaderLinks" >
            <p className="HeaderLinksItem">About Us</p>
            <p className="HeaderLinksItem">Technologies</p>
            <p className="HeaderLinksItem">Portfolio</p>
            <p className="HeaderLinksItem">Our Team</p>
            <p className="HeaderLinksItem">Contact Information</p>
        </div>
        <div className="HeaderStartProjectButton" >
            Start Project
        </div>
        <div className="HeaderStartUpsButton" >
            For Startups
        </div>
    </header>
)

export default Header;