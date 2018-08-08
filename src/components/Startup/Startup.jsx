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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          nostrum! Nobis ad commodi labore autem reiciendis illo perspiciatis
          accusantium ducimus amet quaerat ullam facere necessitatibus voluptate
          sapiente dolores sit laborum incidunt neque, voluptatem, quidem atque,
          eveniet eum? Veritatis, quo numquam!
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
            <li>Defining goal</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias.
            </li>
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
            <li>Defining goal</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias.
            </li>
            <li>Q/A</li>
            <li>Other shit shit shit</li>
          </ul>
        </div>
        <div className="Startup_Schema_Item">
          <p className="Startup_Schema_Item_Subtitle Left_First">Get to know</p>
          <ul className="Startup_Schema_Item_UL Left_First_UL">
            <li>Video Meeting</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
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
            <li>Video Meeting</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
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
