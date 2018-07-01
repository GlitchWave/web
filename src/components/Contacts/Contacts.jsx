require('./Contacts.scss');
import React from 'react';

import Map from './components/Map/Map';
import ContactForm from './components/ContactForm/ContactForm';

/**
 * Component to display information about contacts
 * Have no http layer
 */
const Contacts = () => (
    <section className="Contacts" >
        <div className="ContactsFirstBlock"
             style={{backgroundImage: `url(${'https://image.ibb.co/duAFey/banner_2.png'})`}}
         >
            <h2>How you can contact our team?</h2>
            <p>Just send us message via form below.</p>
            <p>We will answer you as fast as light.</p>
            <ContactForm />
        </div>
        <div className="ContactsMapBlock" >
            <div className="ContactsMapBlockAdress" >
                <span>Country</span>
                <span>City</span>
                <span>Street</span>
                <span>mem@kek.lol</span>
                <span>+14(88)2286666</span>
            </div>
            <div className="ContactsMapBlockMapHolder" >
                <p>Or you can meet us in person</p>
            </div>
        </div>
    </section>
)

export default Contacts;

{/*<Map googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDxEpL5sMY3eFOZzIBBAh95aWWQqR9skas&v=3.exp&libraries=geometry,drawing,places'
                 loadingElement={<div style={{height: '500px'}} ></div>}
                 containerElement={<div style={{height: '500px', width: '1000px'}} ></div>}
                 mapElement={<div style={{height: '500px'}} ></div>}
                 isMarkerShown
                  />*/}