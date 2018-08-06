require('./ProjectPage.scss');

import React from 'react';
import TechnologiesList from './components/TechnologiesList';

class ProjectPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="project-page">
        <div className="project-page__banner">
          <div className="project-page__banner__pc">
            <div />
          </div>
          <div className="project-page__banner__text-field">
            <h3>Project Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              repellendus molestias vel praesentium incidunt impedit magni,
              quaerat voluptates non reiciendis.
            </p>
            <div className="project-page__banner__text-field__button">
              CHECK THIS PRODUCT
            </div>
          </div>
        </div>
        <div className="project-page__technologies">
          <div
            className="project-page__technologies__sprite"
            style={{
              backgroundImage: 'url(https://image.ibb.co/esCt5e/untitled_5.png)'
            }}
          />
          <h3>TECHNOLOGIES WE USED ON THIS PROJET</h3>
          <TechnologiesList
            types={['frontend', 'backend']}
            concreteeTechnologies={[['react', 'angular'], ['node.js', 'hapi']]}
          />
        </div>
      </section>
    );
  }
}

export default ProjectPage;
