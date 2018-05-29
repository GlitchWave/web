require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './Main/Main';

import StaticLinks from '../helpers/StaticLinks';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sourceOfStatic: StaticLinks
    }

  }

  render() {
    return (
      <div className="wraper">
        <Switch>
          <Route path='/' exact render={() => (
            <Main staticLinks={this.state.sourceOfStatic} />
          )} />
        </Switch>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
