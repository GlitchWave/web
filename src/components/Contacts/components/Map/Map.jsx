import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import final from './styles';

const MapComponent = compose(
  withProps({
    googleMapUrl:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDxEpL5sMY3eFOZzIBBAh95aWWQqR9skas',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '608px', width: '658px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
    zoom: 15
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{ lat: 50.43522857, lng: 30.51804121 }}
    options={{
      styles: final,
      disableDefaultUI: true
    }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 50.43522857, lng: 30.51804121 }}
        icon={'https://image.ibb.co/mbwBuy/1_asset_1.png'}
        options={{ size: '20' }}
      />
    )}
  </GoogleMap>
));

export default MapComponent;
