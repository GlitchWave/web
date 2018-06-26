require('./Portfolio.scss');

import React from 'react';
import Navigation from './components/Navigation/Navigation';

import PortfolioBuilder from './helpers/PortfolioBuilder';

/**
 * Component to display projects of company
 * May have http layer
 */
const Portfolio = () => {
    return (
        <section className="Porfolio" >
            <div className="PortfolioNavSection" style={{backgroundImage: `url(${'https://image.ibb.co/kdahzo/portfolio_top_paints_1366_x_756.png'})`}} >
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum voluptates ratione impedit, incidunt aspernatur adipisci fugiat accusamus natus perspiciatis reiciendis.</p>
                <Navigation />
            </div>
            <div className="PortfolioItemsHolder" >
                {PortfolioBuilder([1,2,3,4])}
            </div>
        </section>
    )
}

export default Portfolio;