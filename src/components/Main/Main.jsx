require('./Main.scss');

import React from 'react';
//import { Link } from 'react-router-dom';
import VideoBanner from './components/VideoBanner';
import Carousel from './components/Carousel';
import CommonForm from '../shared/components/CommonForm/CommonForm';
import Founders from '../shared/components/Founders/Founders';

/**
 * Main view with navigation
 */
const Main = (props) => {
    return (
        <section className="Main" >
            <VideoBanner staticLinks={props.staticLinks} />
            <Founders />
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