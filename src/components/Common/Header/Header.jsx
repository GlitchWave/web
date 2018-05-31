require('./Header.scss');

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="HeaderLinks" >
            <Link to='/' className="HeaderLinksItem">Main</Link>
            <Link to='/about' className="HeaderLinksItem">About Us</Link>
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