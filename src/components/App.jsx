require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main/Main';
import AboutUs from './AboutUs/AboutUs';
import Portfolio from './Portfolio/Portfolio';
import Contacts from './Contacts/Contacts';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayedText: 'Equinox'
    }
  }

  render() {
    return (
      <div className="wraper">
        <Switch>
          <Route path='/' exact render={({history}) => (
            <Main history={history}
                  displayedText={this.state.displayedText}
             />
          )} />
          <Route path='/contacts' exact render={({history}) => (
            <Contacts history={history}
              />
          )} />
          <Route path='/info' exact render={({history}) => (
            <AboutUs history={history}
             />
          )} />
          <Route path='/projects' exact render={({history}) => (
            <Portfolio history={history}
             />
          )} />
        </Switch>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
