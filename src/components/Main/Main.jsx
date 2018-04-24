const book = require('../../images/book.png'),
      eye = require('../../images/eye.png'),
      illuminati = require('../../images/iluminati.png'),
      top = require('../../images/top.png');

import React from 'react';

import Footer from '../Common/Footer';

/**
 * Main view with navigation
 */
const Main = (props) => {
    return (
        <div className="Main" >
            <div className="MainTopCircles">
                <img src={top} alt="circles"/>
            </div>
            <div className="MainHoveredText">
                <p>{props.displayedText}</p>
            </div>
            <div className="MainNavigation">
                <div className="MainNavigationItem"><img src={eye} alt="About us"/></div>
                <div className="MainNavigationItem"><img src={illuminati} alt="Gallery"/></div>
                <div className="MainNavigationItem"><img src={book} alt="Contacts"/></div>
            </div>
            <Footer />
        </div>
    )
}

export default Main;