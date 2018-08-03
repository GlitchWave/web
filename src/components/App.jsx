require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './Main/Main';
import StaticLinks from '../helpers/StaticLinks';
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import Portfolio from './Portfolio/Portfolio';
import AboutUs from './AboutUs/AboutUs';
import Contacts from './Contacts/Contacts';
import StartProject from './StartProject/StartProject';
import Technologies from './Technologies/Technologies';
import Startup from './Startup/Startup';
import { ParallaxProvider } from '../../node_modules/react-scroll-parallax';
import ProjectPage from './ProjectPage/ProjectPage';
import SEO_SERVICE from '../helpers/Services/SEO_SERVICE';
import NotFound from './NotFound/NotFound';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sourceOfStatic: StaticLinks,
      SEO: SEO_SERVICE
    };
  }

  render() {
    return (
      <ParallaxProvider>
        <div className="wraper">
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Main
                  staticLinks={this.state.sourceOfStatic}
                  seo={this.state.SEO.main}
                />
              )}
            />
            <Route
              path="/portfolio"
              exact
              render={({ history }) => (
                <Portfolio history={history} seo={this.state.SEO.portfolio} />
              )}
            />
            <Route
              path="/about-us"
              exact
              render={() => <AboutUs seo={this.state.SEO.aboutus} />}
            />
            <Route
              path="/contacts"
              exact
              render={() => <Contacts seo={this.state.SEO.contacts} />}
            />
            <Route
              path="/start-project"
              exact
              render={() => <StartProject seo={this.state.SEO.start} />}
            />
            <Route path="/technologies" exact render={() => <Technologies />} />
            <Route
              path="/startup"
              exact
              render={() => <Startup seo={this.state.SEO.startup} />}
            />
            <Route path="/portfolio/:project" component={ProjectPage} />
            <Route
              path="/*"
              render={() => <NotFound seo={this.state.SEO.notfound} />}
            />
          </Switch>
          <Footer />
        </div>
      </ParallaxProvider>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
