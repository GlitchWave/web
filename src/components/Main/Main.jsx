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
        <p className="MainFoundersTextFieldItem">{0}</p>
      </div>
      <MainOurWorks />
      <div className="MainContactSection">
        <CommonForm />
      </div>
    </section>
  );
};

export default Main;
