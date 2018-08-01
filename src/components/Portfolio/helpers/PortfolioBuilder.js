import PortfolioItem from '../components/PortfolioItem/PortfolioItem';
import React from 'react';

const PortfolioBuilder = (arrayOfItems, history) => {
    return (arrayOfItems.map(() => <PortfolioItem key={Math.round(Math.random()*1000)} history={history} />));
}

export default PortfolioBuilder;