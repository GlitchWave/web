require('./Navigation.scss');
import React from 'react';

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      spriteURL: 'https://image.ibb.co/jjDNoo/tech_Backs_Artboard_20.png',
      backgroundColor: '#0f999c',
      web: '',
      all: '',
      mobile: '',
      bWeb: '',
      bAll: '',
      bMobile: ''
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.toggleSprite = this.toggleSprite.bind(this);
  }

  toggleSprite(type) {
    switch (type) {
      case 'web':
        if (this.state.web.length === 0) {
          this.setState(prevState => ({
            web: prevState.spriteURL,
            all: '',
            mobile: ''
          }));
        } else {
          this.setState({ web: '' });
        }
        break;
      case 'all':
        if (this.state.all.length === 0) {
          this.setState(prevState => ({
            all: prevState.spriteURL,
            web: '',
            mobile: ''
          }));
        } else {
          this.setState({ all: '' });
        }
        break;
      case 'mobile':
        if (this.state.mobile.length === 0) {
          this.setState(prevState => ({
            mobile: prevState.spriteURL,
            web: '',
            all: ''
          }));
        } else {
          this.setState({ mobile: '' });
        }
        break;
      default:
        break;
    }
  }

  clickHandler(type) {
    switch (type) {
      case 'web':
        this.setState(prevState => ({
          bWeb: prevState.backgroundColor,
          bMobile: '',
          bAll: ''
        }));
        break;
      case 'all':
        this.setState(prevState => ({
          bAll: prevState.backgroundColor,
          bMobile: '',
          bWeb: ''
        }));
        break;
      case 'mobile':
        this.setState(prevState => ({
          bMobile: prevState.backgroundColor,
          bWeb: '',
          bAll: ''
        }));
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div className="Navigation">
        <div
          className="NavigationItem"
          style={{
            backgroundImage: `url(${this.state.web})`
          }}
          onMouseOver={() => this.toggleSprite('web')}
          onMouseOut={() => this.toggleSprite('web')}
          onClick={() => this.clickHandler('web')}
        >
          WEB
        </div>
        <div
          className="NavigationItem"
          onMouseOver={() => this.toggleSprite('all')}
          onMouseOut={() => this.toggleSprite('all')}
          onClick={() => this.clickHandler('all')}
          style={{
            backgroundImage: `url(${this.state.all})`,
            backgroundColor: this.state.bAll
          }}
        >
          ALL
        </div>
        <div
          className="NavigationItem"
          onMouseOver={() => this.toggleSprite('mobile')}
          onMouseOut={() => this.toggleSprite('mobile')}
          onClick={() => this.clickHandler('mobile')}
          style={{
            backgroundImage: `url(${this.state.mobile})`
          }}
        >
          MOBILE
        </div>
      </div>
    );
  }
}

export default Navigation;
