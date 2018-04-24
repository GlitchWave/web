const book = require('../../images/book.png'),
      eye = require('../../images/eye.png'),
      illuminati = require('../../images/iluminati.png'),
      top = require('../../images/top.png');

import React from 'react';

import Footer from '../Common/Footer';

/**
 * Main view with navigation
 * http://i.piccy.info/i9/0e494e8a04e4dbffa433bbc7bf92c5cc/1524494194/143417/1239415/background.jpg
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