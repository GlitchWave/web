require('./AboutUs.scss');

import React from 'react';

import Particles from 'react-particles-js';
import {
  finalFirst,
  finalSecond,
  finalThird,
  finalFourth
} from './config/config';
import createMembers from './helpers/MembersCreator';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

/**
 * Component to display static info
 * No http layer
 * http://i.piccy.info/i9/73692f20ade969d15abfec6e5a00be8f/1524557535/142319/1239415/background_copy.jpg
 */
const AboutUs = ({ seo }) => {
  return (
    <section className="AboutUs">
      <Helmet>
        <title>About Equinox</title>
        <meta name="author" content="Equinox Company" />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
      <div
        className="AboutUsFirstSection"
        style={{
          backgroundImage: `url(${'https://image.ibb.co/dEii5T/wwr_banner.png'})`
        }}
      >
        <h1>DREAMS</h1>
        <h2>can't do what we can</h2>
        <p className="AboutUsFirstSectionText">
          Equinox is a company of ambitious technology professionals. Our main
          idea is really simple - to help smart people, entrepreneurs and
          companies with technology aspects of their projects. We give them the
          opportunity to focus on the business while we do what we do best -
          amazing software development. We are a people oriented company. We
          believe that the only way to achieve outstanding results is to do the
          right things with the right people. The manifesto of our company
          contains principles such as trust, transparency, team spirit, quality,
          sense of beauty, health and social responsibility.
        </p>
        <p className="AboutUsFirstSectionSubTitle">
          Who is working on your project?
        </p>
        <p className="AboutUsFirstSectionSubTextFirst">
          Our developers are carefully selected so you work only with the best
        </p>
        <p className="AboutUsFirstSectionSubTextSecond">
          First, a variety of developers come to Equinox
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
        <p>Some of them pass our live interview and English test</p>
        <Particles params={finalSecond} className="firstParticles" />
        <p>Then they need to pass out code quality test</p>
        <Particles params={finalThird} className="firstParticles" />
        <p>To become part of Equinox team</p>
        <Particles params={finalFourth} className="firstParticles" />
      </div>
      <div className="AboutUsMembers">
        {createMembers([
          {
            url: '#',
            name: 'Vladislav Gorovoy',
            position: 'CTO / Fullstack developer'
          },
          {
            url: '#',
            name: 'Artem Chernenkiy',
            position: 'Lead IOS developer'
          },
          {
            url: '#',
            name: 'Andrew Vakuliuk',
            position: 'Fullstack web developer'
          },
          {
            url: '#',
            name: 'Oleh Diordiychuk',
            position: 'Fullstack web developer'
          },
          {
            url: '#',
            name: 'Lidiya Ivanova',
            position: 'Lead Android developer'
          },
          {
            url: '#',
            name: 'Anatoliy Bernatovich',
            position: '.Net core developer'
          },
          {
            url: '#',
            name: 'Nikolay Meretskyi',
            position: 'Data scientist / Python dev'
          },
          {
            url: '#',
            name: 'Kostiantyn Davydov',
            position: 'Frontend developer'
          },
          {
            url: '#',
            name: 'Maxim Prihodko',
            position: 'Designer / 3d modeling'
          }
        ])}
      </div>
      <Link to="/contacts" className="AboutUsContactUsButton">
        CONTACT US
      </Link>
    </section>
  );
};

export default AboutUs;
