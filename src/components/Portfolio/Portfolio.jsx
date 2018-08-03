require('./Portfolio.scss');

import React from 'react';
import Navigation from './components/Navigation/Navigation';
import PortfolioBuilder from './helpers/PortfolioBuilder';
import { Helmet } from 'react-helmet';

/**
 * Component to display projects of company
 * May have http layer
 */
class Portfolio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll() {
    window.scroll(0, 0);
  }

  componentDidMount() {
    this.scroll();
  }
  render() {
    const { seo } = this.props;
    return (
      <section className="Porfolio">
        <Helmet>
          <title>Equinox Portfolio</title>
          <meta name="author" content="Equinox Company" />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
        </Helmet>
        <div
          className="PortfolioNavSection"
          style={{
            backgroundImage: `url(${'https://image.ibb.co/kdahzo/portfolio_top_paints_1366_x_756.png'})`
          }}
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            voluptates ratione impedit, incidunt aspernatur adipisci fugiat
            accusamus natus perspiciatis reiciendis.
          </p>
          <Navigation />
        </div>
        <div className="PortfolioItemsHolder">
          {PortfolioBuilder([1, 2, 3, 4], this.props.history)}
        </div>
      </section>
    );
  }
}

export default Portfolio;
