require('./Main.scss');

import React from 'react';
import CommonForm from '../shared/components/CommonForm/CommonForm';
import Founders from '../shared/components/Founders/Founders';
import ImageBunner from './components/ImageBanner';
import MainOurWorks from './components/OurWorksMain';
import { Helmet } from 'react-helmet';

/**
 * Main view with navigation
 */
const Main = ({ seo }) => {
  return (
    <section className="Main">
      <Helmet>
        <title>Equinox Corp</title>
        <meta name="author" content="Equinox Company" />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
      <ImageBunner imageURL="https://image.ibb.co/bsnnN8/main_banner_03.png" />
      <Founders />
      <div className="MainFoundersTextField">
        <p className="MainFoundersTextFieldItem">
          Michael Sukhorukov - SEO and the founder of Equinox.
        </p>
        <p
          className="MainFoundersTextFieldItem"
          style={{ width: '60%', marginLeft: '30px', marginRight: '30px' }}
        >
          Artem Chernenkyy - professional iOS developer and team lead of mobile
          development team of Equinox. He creates and manages teams for mobile
          applications implementation.
        </p>
        <p className="MainFoundersTextFieldItem">
          Vladislav Gorovoy - CTO and founder of Equinox.
        </p>
      </div>
      <MainOurWorks />
      <div className="MainContactSection">
        <CommonForm />
      </div>
    </section>
  );
};

export default Main;
