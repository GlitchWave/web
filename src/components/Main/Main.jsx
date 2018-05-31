require('./Main.scss');

import React from 'react';
//import { Link } from 'react-router-dom';
import Header from '../Common/Header/Header';
import VideoBanner from './components/VideoBanner';
import Carousel from './components/Carousel';
import CommonForm from '../shared/components/CommonForm';

/**
 * Main view with navigation
 */
const Main = (props) => {
    return (
        <section className="Main" >
            <Header />
            <VideoBanner staticLinks={props.staticLinks} />
            <div className="MainFounders" >
                <h2>Our Founders</h2>
                <div className="MainFoundersSubContainer" >
                    <img src="#" alt="" className="MainFoundersSubContainerItem"/>
                    <img src="#" alt="" className="MainFoundersSubContainerItem"/>
                    <img src="#" alt="" className="MainFoundersSubContainerItem"/>
                </div>
            </div>
            <div className="MainFoundersTextField" >
                <p className="MainFoundersTextFieldItem" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque illum eos ullam maiores, aut porro dolorem culpa magnam eveniet accusamus.
                </p>
            </div>
            <Carousel type='TEXT'
                      sourceObjects={[{text: 'kek'}, {text: 'lel'}]} />
            <CommonForm />
        </section>
    )
}

export default Main;