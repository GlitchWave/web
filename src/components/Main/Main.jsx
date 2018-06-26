require('./Main.scss');

import React from 'react';
//import { Link } from 'react-router-dom';
import CommonForm from '../shared/components/CommonForm/CommonForm';
import Founders from '../shared/components/Founders/Founders';
import ImageBunner from './components/ImageBanner';
import MainOurWorks from './components/OurWorksMain';

/**
 * Main view with navigation
 */
const Main = (props) => {
    return (
        <section className="Main" >
            <ImageBunner imageURL="https://image.ibb.co/bsnnN8/main_banner_03.png" />
            <Founders />
            <div className="MainFoundersTextField" >
                <p className="MainFoundersTextFieldItem" >
                    {0}
                </p>
            </div>
            <MainOurWorks />
            <div className="MainContactSection">
                <CommonForm />
            </div>
        </section>
    )
}

export default Main;