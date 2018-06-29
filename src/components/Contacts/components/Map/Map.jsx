import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(props => (
    <GoogleMap defaultCenter={{lat: -40, lng: 250}}
               defaultZoom={8}
        >
        {props.isMarkerShown && <Marker position={{lat: -40, lng: 250}} />}
    </GoogleMap>
)))

export default Map;