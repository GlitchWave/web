require('./Portfolio.scss');

import React from 'react';
import Navigation from './components/Navigation/Navigation';
import PortfolioBuilder from './helpers/PortfolioBuilder';
import { Helmet } from 'react-helmet';
import PortfolioSource from './data/Portfolio.Source';

/**
 * Component to display projects of company
 * May have http layer
 */
class Portfolio extends React.PureComponent {
  constructor(props) {
    super(props);

    const { items, types } = PortfolioBuilder(
      PortfolioSource(),
      this.props.history
    );

    this.state = {
      filter: 'all',
      items: items,
      types: types,
      filteredItems: items
    };

    this.changeFilter = this.changeFilter.bind(this);
    this.scroll = this.scroll.bind(this);
    this.filter = this.filter.bind(this);
  }

  changeFilter(payload, cb) {
    this.setState({ filter: payload }, () => cb(payload));
  }

  filter(type) {
    let { items, types } = this.state,
      idxs = [],
      newFiltered = [];
    switch (type) {
      case 'all':
        this.setState({ filteredItems: items });
        break;
      case 'mobile':
        types.forEach(el => {
          if (el.type === 'mobile') idxs.push(el.id);
        });

        idxs.forEach(el => {
          newFiltered.push(items[el]);
        });
        this.setState({ filteredItems: newFiltered });
        break;
      case 'web':
        types.forEach(el => {
          if (el.type === 'web') idxs.push(el.id);
        });

        idxs.forEach(el => {
          newFiltered.push(items[el]);
        });
        this.setState({ filteredItems: newFiltered });
        break;
      default:
        break;
    }
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
          <Navigation changeFilter={this.changeFilter} filter={this.filter} />
        </div>
        <div className="PortfolioItemsHolder">{this.state.filteredItems}</div>
      </section>
    );
  }
}

export default Portfolio;
