require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="wraper">
        Application
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
