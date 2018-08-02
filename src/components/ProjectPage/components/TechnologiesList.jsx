import React from 'react';

const techBlocksCreator = (labels, techs) =>
  labels.map((el, i) => {
    return <Block key={i} label={el} technologies={techs[i]} />;
  });

const Block = ({ label, technologies }) => {
  return (
    <div className="technologies-list__block">
      <div className="technologies-list__block__label">{label}</div>
      <div className="technologies-list__block__list">
        {technologies.map((el, i) => <span key={i}>{el.toString()}</span>)}
      </div>
    </div>
  );
};

const TechnologiesList = ({ types, concreteeTechnologies }) => {
  return (
    <div className="technologies-list">
      {techBlocksCreator(types, concreteeTechnologies)}
    </div>
  );
};

export default TechnologiesList;
