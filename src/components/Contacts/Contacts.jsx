require('./Contacts.scss');
import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import MapComponent from './components/Map/Map';
import { Helmet } from 'react-helmet';

/**
 * Component to display information about contacts
 * Have no http layer
 */
class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <section className="Contacts">
        <Helmet>
          <title>Contact Equinox</title>
          <meta name="author" content="Equinox Company" />
          <meta name="description" content={this.props.seo.description} />
          <meta name="keywords" content={this.props.seo.keywords} />
        </Helmet>
        <div
          className="ContactsFirstBlock"
          style={{
            backgroundImage: `url(${'https://image.ibb.co/duAFey/banner_2.png'})`
          }}
        >
          <h2>How you can contact our team?</h2>
          <p>Just send us message via form below.</p>
          <p>We will answer you as fast as light.</p>
          <ContactForm />
        </div>
        <div className="ContactsMapBlock">
          <div className="ContactsMapBlockAdress">
            <span>Ukraine</span>
            <span>Kiev</span>
            <span>Shota Rustaveli 44</span>
            <span>a@eqnx.cc</span>
            <span>+38(098)293-75-12</span>
          </div>
          <div className="ContactsMapBlockMapHolder">
            <p>Or you can meet us in person</p>
            <MapComponent
              isMarkerShown={true}
              googleMapURL={
                'https://maps.googleapis.com/maps/api/js?key=AIzaSyDxEpL5sMY3eFOZzIBBAh95aWWQqR9skas'
              }
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
