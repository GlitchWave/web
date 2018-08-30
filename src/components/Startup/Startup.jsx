require('./Startup.scss');
import React from 'react';
import MainOurWorks from '../Main/components/OurWorksMain';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Startup = ({ seo }) => {
  return (
    <section className="Startup">
      <Helmet>
        <title>Startup Equinox</title>
        <meta name="author" content="Equinox Company" />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
      <div
        className="Startup_Banner"
        style={{
          backgroundImage: `url(${'https://image.ibb.co/cmjuzy/startup_banner_bg.png'})`,
          backgroundSize: 'cover'
        }}
      >
        <h2>Let your dreams come true</h2>
        <Link to="/contacts" className="Startup_Banner_Button">
          Let's do it!
        </Link>
      </div>
      <div className="Startup_First_Text">
        <h2>We offer you</h2>
        <p>
          Our team has huge experience in working with startups. We develop
          startup from scratch, create MVP and the corresponding product.
          Besides that, Equinox has a team of business analytics who will take
          care of your product, build the optimal strategy for its development
          and promotion and consult your startup thereafter.
        </p>
      </div>
      <h3 className="Startup_Subtitle">How it works</h3>
      <div
        className="Startup_Schema"
        style={{
          backgroundImage: `url(${'https://image.ibb.co/ioa9Gd/body_rama_img.png'})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center'
        }}
      >
        <div className="Startup_Schema_Item">
          <div className="First-Image">
            <img
              src={'https://image.ibb.co/cQh1eT/cloud_1.png'}
              id="firstSol"
            />
            <img
              src={'https://image.ibb.co/kOPEzT/cloud_2.png'}
              id="secondSol"
            />
          </div>
          <p className="Startup_Schema_Item_Subtitle Right_First">
            Planning & Preparation
          </p>
          <ul className="Startup_Schema_Item_UL First_UL">
            <li>Defining goals</li>
            <li>User interface and user experience design</li>
            <li>Discussion and improvement of the results with a client</li>
          </ul>
          <img
            src={'https://image.ibb.co/fT239y/body_development_img.png'}
            className="Startup_Schema_Item_Image"
            id="ROTATING"
          />
          <p className="Startup_Schema_Item_Subtitle Right_Second">
            Finalizing
          </p>
          <ul className="Startup_Schema_Item_UL Second_UL">
            <li>Frontend and backend development continued</li>
            <li>QA the application</li>
            <li>Project demo</li>
            <li>60% final payment</li>
            <li>Application production deployment</li>
          </ul>
        </div>
        <div className="Startup_Schema_Item">
          <p className="Startup_Schema_Item_Subtitle Left_First">Get to know</p>
          <ul className="Startup_Schema_Item_UL Left_First_UL">
            <li>Video Meeting (Company and service introduction)</li>
            <li> Signing NDA & defining the project needs</li>
            <li>Agreement, (40% deposit payment)</li>
            <li>
              Project setting up (clarifying assumptions and prioritizing
              features)
            </li>
          </ul>
          <div
            className="clock-holder"
            style={{
              backgroundImage: `url(${'https://image.ibb.co/gv8F68/clock.png'})`
            }}
          >
            <img
              src={'https://image.ibb.co/jSZf68/clock_arrow.png'}
              id="tick"
            />
          </div>
          <p className="Startup_Schema_Item_Subtitle Left_Second ">
            Development
          </p>
          <ul className="Startup_Schema_Item_UL Left_First_UL">
            <li>Setting up development process</li>
            <li>Preparing development environment</li>
            <li>Frontend and Backend development</li>
          </ul>
          <img
            src={'https://image.ibb.co/idkgUT/commet.png'}
            style={{ width: '100px' }}
            id="comet"
          />
        </div>
      </div>
      <MainOurWorks />
    </section>
  );
};

export default Startup;
