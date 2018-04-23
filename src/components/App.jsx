require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main/Main';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="wraper">
        <Switch>
          <Route path='/' exact render={({history}) => (
            <Main history={history} />
          )} />
        </Switch>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
