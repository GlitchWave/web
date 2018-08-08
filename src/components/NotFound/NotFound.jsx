require('./NotFound.scss');
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionHeight: ''
    };
  }

  componentWillMount() {
    let height = window.innerHeight;
    height = height - 159;
    this.setState(() => ({
      sectionHeight: height.toString() + 'px'
    }));
  }
  render() {
    const { seo } = this.props;
    return (
      <section
        className="not-found"
        style={{ height: this.state.sectionHeight }}
      >
        <Helmet>
          <title>No Such Page</title>
          <meta name="author" content="Equinox Company" />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
        </Helmet>
        <h1>PAGE NOT FOUND</h1>
        <img
          id="anim"
          className="not-found__animation-layer-first"
          src="https://image.ibb.co/e7wjWK/invalid_name.png"
          alt=""
        />
        <p>
          Pape you trying to enter doesn`t exist or not avelable at this time.
        </p>
        <p>
          Please return to home page or contact us to provide information about
          your problem.
        </p>
        <img
          className="not-found__animation-layer-second"
          src="https://image.ibb.co/gop21K/copy.png"
        />
        <Link to="/" className="not-found__back-button">
          BACK TO HOME PAGE
        </Link>
        <Link to="/contacts" className="not-found__contact-us-button">
          CONTACT US
        </Link>
      </section>
    );
  }
}

export default NotFound;
