require('./Main.scss');

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Common/Header/Header';
import VideoBanner from './components/VideoBanner';

/**
 * Main view with navigation
 */
const Main = (props) => {
    return (
        <section className="Main" >
            <Header />
            <VideoBanner staticLinks={props.staticLinks} />
        </section>
    )
}

export default Main;