const logo = require('../../images/logo.png'),
      central = require('../../images/top.png'),
      back = require('../../images/back.png');

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component to display static info
 * No http layer
 * http://i.piccy.info/i9/73692f20ade969d15abfec6e5a00be8f/1524557535/142319/1239415/background_copy.jpg
 */
const AboutUs = () => {
    return (
        <div className="AboutUs" >
            <div className="AboutUsImages">
                <Link to="/" className="AboutUsImagesBack">
                    <div className="InnerCircle">
                        <img src={back} alt="back"/>
                    </div>
                </Link>
            </div>
            <div className="AboutUsImagesCentral">
                <img src={central} alt="central"/>
            </div>
            <div className="AboutsUsImagesLogo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="AboutsUsTitle">
                <h1>Equinox</h1>
            </div>
            <div className="AboutUsSubtitle">
                <p>EVERY OUR PRODUCT IS A MASTERPIECE</p>
            </div>
            <div className="AboutUsTextContent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus soluta, atque quam possimus reprehenderit harum mollitia vero laboriosam sequi at officia, labore quae rerum dicta libero. Minus, sunt necessitatibus, omnis at aspernatur nobis commodi quas temporibus dolores magni maxime. Ipsum, rem. Repellat vel praesentium repudiandae, totam tenetur laboriosam velit numquam facilis illo porro, dolorum omnis voluptatem minima. Maiores laboriosam veniam numquam distinctio sequi temporibus ut.</p>
                <p className="AboutUsTextContentLow" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, debitis odio. Corporis ex, et sed sunt in esse tempore nemo, quam culpa pariatur error ipsum libero ullam nisi odit ab perspiciatis commodi? Alias, itaque rem!</p>
            </div>
        </div>
    )
}

export default AboutUs;