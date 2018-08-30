import PortfolioItem from '../components/PortfolioItem/PortfolioItem';
import React from 'react';

const PortfolioBuilder = (arrayOfItems, history) => {
    let types = [];
    return {
        types: types,
        items: (arrayOfItems.map((el, i) => {
           types.push({type: el.type, id: i});
           return <PortfolioItem key={i} history={history} fullContent={el.fullContent} shortContent={el.shortContent} />;
        }))
    }
}

export default PortfolioBuilder;