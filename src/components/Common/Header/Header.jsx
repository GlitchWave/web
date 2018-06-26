require('./Header.scss');

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="Header" >
        <p className="HeaderLinksItem">About Us</p>
        <p className="HeaderLinksItem">Portfolio</p>
        <p className="HeaderLinksItem">Technologies</p>
        <p className="HeaderLinksItem">Contact Information</p>
        <div className="HeaderButtonsItem HeaderButtonsItemFirst">Start Project</div>
        <div className="HeaderButtonsItem HeaderButtonsItemSecond">For Startups</div>
    </header>
)

export default Header;