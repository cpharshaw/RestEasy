import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 39.9526,
         lng: -75.1652
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVYS3YTeyILl2Cr7ajZ0ZdKbO092cW6lw'
})(MapContainer);