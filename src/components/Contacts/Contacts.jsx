import React from 'react';

import Map from './components/Map';

/**
 * Component to display information about contacts
 * Have no http layer
 */
const Contacts = () => (
    <section className="Contacts" >
        <div className="ContactsBanner" >
            Some wow text
        </div>
        <div className="ContactsTextField" >
            <p className="ContactsTextFieldItem" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis laudantium rem sequi alias magni neque nesciunt quasi consequatur quia doloribus.</p>
        </div>
        <div className="ContactsTextField" >
            <p className="ContactsTextFieldItem" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis laudantium rem sequi alias magni neque nesciunt quasi consequatur quia doloribus.</p>
        </div>
        <div className="ContactsMapAndData" >
            <Map googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyDxEpL5sMY3eFOZzIBBAh95aWWQqR9skas&v=3.exp&libraries=geometry,drawing,places'
                 loadingElement={<div style={{height: '500px'}} ></div>}
                 containerElement={<div style={{height: '500px', width: '1000px'}} ></div>}
                 mapElement={<div style={{height: '500px'}} ></div>}
                 isMarkerShown
                  />
            <div className="ContactsMapAndDataData" >
            </div>
        </div>
    </section>
)

export default Contacts;