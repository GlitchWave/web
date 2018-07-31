require('./Header.scss');

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <Link to="/" className="HeaderLinksItem">
      Home
    </Link>
    <Link to="/about-us" className="HeaderLinksItem">
      About Us
    </Link>
    <Link to="/portfolio" className="HeaderLinksItem">
      Portfolio
    </Link>
    <Link to="/contacts" className="HeaderLinksItem">
      Contact Information
    </Link>
    <Link
      to="/start-project"
      className="HeaderButtonsItem HeaderButtonsItemFirst"
    >
      Start Project
    </Link>
    <Link to="/startup" className="HeaderButtonsItem HeaderButtonsItemSecond">
      For Startups
    </Link>
  </header>
);

export default Header;
