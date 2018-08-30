require('./PortfolioItem.scss');

import React from 'react';

const PortfolioItem = props => {
  return (
    <div
      className="PortfolioItem"
      onClick={() => {
        props.history.push('/portfolio/kek', props.fullContent);
      }}
    >
      <div className="PortfolioItemThumbnail" />
      <div className="PortfolioItemDescription">
        <h3>{props.shortContent.title}</h3>
        <p>{props.shortContent.description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
