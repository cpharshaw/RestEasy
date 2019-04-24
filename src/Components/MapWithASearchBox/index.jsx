/* global google  */


import React, { Component } from 'react';
import * as _ from "lodash";
import { compose, withProps, lifecycle, withStateHandlers } from "recompose";
import { FaAnchor } from "react-icons/fa";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
// import { InfoWindow } from "react-google-maps/lib/components/InfoWindow";

import './mapStyle.css';

// import '../Review';

import Review from '../../Components/Review';

export const MyStyle = [
  [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]

]




const MapWithASearchBox = compose(

  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVYS3YTeyILl2Cr7ajZ0ZdKbO092cW6lw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="containerElement" />,
    mapElement: <div className="mapElement" />,

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
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    },


    componentDidMount() {

      const refs = {}


      // if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition(position => {
      this.setState({

        bounds: null,

        zoom: 15,

        center: {
          lat: null,
          lng: null
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


        handleToggleOpen: () => {
          this.setState({
            isOpen: true
          });
        },

        handleToggleClose: () => {
          this.setState({
            isOpen: false
          });
        },

        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },

        onPlacesChanged: () => {

          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {

            console.log(place);

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
        }


      });
      // }
    }

  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
  withScriptjs,
  withGoogleMap
)(props =>

  <div className="">
    {/* < Review /> */}
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
              className="searchInput text-left"
              type="text"
              placeholder="Search for places"
            />
          </div>
        </div>
      </div>

    </SearchBox>


    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={props.zoom}
      center={props.center}
      onBoundsChanged={props.onBoundsChanged}
      mapTypeId="roadmap"
      defaultOptions={{
        // these following 7 options turn certain controls off see link below
        streetViewControl: true,
        // scaleControl: false,
        clickableIcons: true,
        mapTypeControl: false,
        // panControl: false,
        // zoomControl: false,
        // rotateControl: false,
        fullscreenControl: false,
        styles: MyStyle[0]

      }}
    // var infowindow = new google.maps.InfoWindow({
    //   content: contentString
    // });

    // var marker = new google.maps.Marker({
    //   position: uluru,
    //   map: map,
    //   title: 'Uluru (Ayers Rock)'
    // });
    // marker.addListener('click', function() {
    //   infowindow.open(map, marker);
    // });


    // https://github.com/tomchentw/react-google-maps/issues/175
    >
      {props.markers.map((marker, index) =>

        <Marker
          key={index}
          position={marker.position}
          onClick={props.onToggleOpen}
        >
          
            {
             props.isOpen && 
               <InfoWindow onCloseClick={props.onToggleOpen}>
                 
                 < Review />

               </InfoWindow>
           }

        </Marker>
      )}

    </GoogleMap>

  </div>
);

export default MapWithASearchBox;



// onBoundsChanged: () => {
//   this.setState({
//     bounds: refs.map.getBounds(),
                    // center: refs.map.getCenter()
                    // center: new google.maps.LatLngBounds()
//   })
// },