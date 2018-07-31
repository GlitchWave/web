require('./AboutUs.scss');

import React from 'react';

import Particles from 'react-particles-js';
import {
  finalFirst,
  finalSecond,
  finalThird,
  finalFourth
} from './config/config';
import Founders from '../shared/components/Founders/Founders';
import createMembers from './helpers/MembersCreator';

/**
 * Component to display static info
 * No http layer
 * http://i.piccy.info/i9/73692f20ade969d15abfec6e5a00be8f/1524557535/142319/1239415/background_copy.jpg
 */
const AboutUs = () => {
  return (
    <section className="AboutUs">
      <div
        className="AboutUsFirstSection"
        style={{
          backgroundImage: `url(${'https://image.ibb.co/dEii5T/wwr_banner.png'})`
        }}
      >
        <h1>DREAMS</h1>
        <h2>can't do what we can</h2>
        <p className="AboutUsFirstSectionText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
          reiciendis fugiat facere praesentium commodi non corrupti deserunt!
          Ullam magnam id quisquam adipisci earum autem sequi aliquam odio ipsam
          fugiat quaerat nam rem, repudiandae sit officiis explicabo dicta quo
          odit quidem animi maxime. Quaerat illum consequuntur quisquam officiis
          ab facilis est, quasi earum voluptate tempore sint. Sit, vero et,
          sequi aliquam perspiciatis aut cumque consectetur, similique adipisci
          consequuntur eos molestiae delectus quas doloremque vitae nobis.
        </p>
        <p className="AboutUsFirstSectionSubTitle">
          Who is working on your project?
        </p>
        <p className="AboutUsFirstSectionSubTextFirst">
          Our developers are carefully selected so you work only with the best
        </p>
        <p className="AboutUsFirstSectionSubTextSecond">
          First, a variety of developers come in Equinox
        </p>
      </div>
      <div className="AboutUsSecondSection">
        {/*<img src="https://image.ibb.co/bRfrAT/path_1.png"/>
                <p>Some of them pass our live interviews and English test</p>
                <img src="https://image.ibb.co/d4fxjo/path_2.png"/>
                <p>Then they need to pass out code quality test</p>
                <img src="https://image.ibb.co/fB91AT/path_3.png"/>
                <p>To become part of Equinox team</p>
    <img src="https://image.ibb.co/ik1y9o/path_4.png"/>*/}
        <Particles params={finalFirst} className="firstParticles" />
        <p>Some of them pass our live interviews and English test</p>
        <Particles params={finalSecond} className="firstParticles" />
        <p>Then they need to pass out code quality test</p>
        <Particles params={finalThird} className="firstParticles" />
        <p>To become part of Equinox team</p>
        <Particles params={finalFourth} className="firstParticles" />
      </div>
      <Founders />
      <div className="AboutUsMembers">
        {createMembers([
          { url: '#', name: 'Ilya Kowalski', position: 'Developer' },
          { url: '#', name: 'Ilya Kowalski', position: 'Developer' },
          { url: '#', name: 'Ilya Kowalski', position: 'Developer' },
          { url: '#', name: 'Ilya Kowalski', position: 'Developer' },
          { url: '#', name: 'Ilya Kowalski', position: 'Developer' },
          { url: '#', name: 'Ilya Kowalski', position: 'Developer' }
        ])}
      </div>
      <div className="AboutUsContactUsButton">CONTACT US</div>
    </section>
  );
};

export default AboutUs;
