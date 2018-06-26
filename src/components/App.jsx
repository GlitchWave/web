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
        </Switch>
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
