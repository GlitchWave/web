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

    //this.changeTitle = this.changeTitle.bind(this);
  }

  /**
   * @param {*} type is location where event was triggered
   */
  /*changeTitle(type) {
    switch(type) {
      case 'contacts':
      this.setState({displayedText: 'Contact Info'});
      break;
      case 'info':
      this.setState({displayedText: 'About Us'});
      break;
      case 'portfolio':
      this.setState({displayedText: 'Our Projects'});
      break;
      case 'equinox':
      this.setState({displayedText: 'Equinox'});
      break;
      default:
      break;
    }
  }*/

  render() {
    return (
      <div className="wraper">
        <Switch>
          <Route path='/' exact render={({history}) => (
            <Main history={history}
                  displayedText={this.state.displayedText}
                  height={this.state.mainComponentHeight}
                  changeTitle={this.changeTitle}
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
