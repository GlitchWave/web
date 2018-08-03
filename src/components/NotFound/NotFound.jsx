require('./NotFound.scss');
import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = ({ seo }) => {
  return (
    <section>
      <Helmet>
        <title>No Such Page</title>
        <meta name="author" content="Equinox Company" />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
    </section>
  );
};

export default NotFound;
