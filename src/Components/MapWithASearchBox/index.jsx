/* global google  */
import React, { Component } from 'react';
import * as _ from "lodash";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";

import './mapStyle.css';

const MapWithASearchBox = compose(

  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVYS3YTeyILl2Cr7ajZ0ZdKbO092cW6lw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div className="loadingElement" />,
    containerElement: <div className="containerElement" />,
    mapElement: <div className="mapElement" />,
    // loadingElement: <div style={{ height: `100%` }} />,
    // containerElement: <div style={{ height: `400px` }} />,
    // mapElement: <div style={{ height: `100%` }} />,
  }),

  // showCurrentLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition( position => {
  //         this.setState({
  //           lat: position.coords.latitude,
  //           lng: position.coords.longitude
  //         });
  //     });
  //   } else {
  //     error => console.log(error)
  //   }
  // },

  lifecycle({

    componentWillMount() {

      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 39.953194,
          lng: -75.163345
        },

        markers: [],

        onMapMounted: ref => {
          refs.map = ref;

        },

        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            // center: refs.map.getCenter()
            // center: new google.maps.LatLngBounds()
          })

        },

        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },

        onPlacesChanged: () => {

          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();
   
  

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });

          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));

          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });

          refs.map.fitBounds(bounds);

        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>

  <div className="">

    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_CENTER}
      onPlacesChanged={props.onPlacesChanged}
    >

      <div className="container ">
        <div className="row ">
          <div className="col-sm-12 ">
            <input
              className="searchInput text-center"
              type="text"
              placeholder="Search for places"
            />
          </div>
        </div>
      </div>

    </SearchBox>


    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={14}
      center={props.center}
      onBoundsChanged={props.onBoundsChanged}
      mapTypeId="roadmap"
      defaultOptions={{
        // styles: mapStyle,
        // these following 7 options turn certain controls off see link below
        streetViewControl: false,
        // scaleControl: false,
        mapTypeControl: false,
        // panControl: false,
        // zoomControl: false,
        // rotateControl: false,
        fullscreenControl: false,
      }}
    // https://github.com/tomchentw/react-google-maps/issues/175
    >
      {props.markers.map((marker, index) => 
        <Marker 
          key={index} 
          position={marker.position} 
          onClick={marker.onMarkerClick}
        />
        
      )
    }

    </GoogleMap>
  </div>
);

export default MapWithASearchBox;


