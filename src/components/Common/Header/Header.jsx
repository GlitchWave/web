require('./Header.scss');

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="Header" >
        <Link to='/about-us' className="HeaderLinksItem">About Us</Link>
        <Link to='/portfolio' className="HeaderLinksItem">Portfolio</Link>
        <p className="HeaderLinksItem">Technologies</p>
        <Link to='/contacts' className="HeaderLinksItem">Contact Information</Link>
        <div className="HeaderButtonsItem HeaderButtonsItemFirst">Start Project</div>
        <div className="HeaderButtonsItem HeaderButtonsItemSecond">For Startups</div>
    </header>
)

export default Header;