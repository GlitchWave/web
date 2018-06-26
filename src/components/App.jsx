require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './Main/Main';

import StaticLinks from '../helpers/StaticLinks';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Contacts from './Contacts/Contacts';
import Portfolio from './Portfolio/Portfolio';

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
        <Header />
        <Switch>
          <Route path='/' exact render={() => (
            <Main staticLinks={this.state.sourceOfStatic} />
          )} />
          <Route path='/portfolio' exact render={() => (
            <Portfolio />
          )} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
