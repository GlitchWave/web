import React from 'react';
import Founders from '../shared/components/Founders/Founders';
import Carousel from '../Main/components/Carousel';

/**
 * Component to display static info
 * No http layer
 * http://i.piccy.info/i9/73692f20ade969d15abfec6e5a00be8f/1524557535/142319/1239415/background_copy.jpg
 */
const AboutUs = () => {
    return (
        <section className="AboutUs" >
            <div className="AboutUsBanner" >
                Such cool text
            </div>
            <div className="AboutUsTextField" >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel illum beatae a dicta, optio repellendus sit provident ipsum blanditiis quas!</p>
            </div>
            <Founders />
            <Carousel type={'TEXT'}
                      sourceObjects={[{text: 'kek'}, {text: 'lel'}]}
                />
        </section>
    )
}

export default AboutUs;