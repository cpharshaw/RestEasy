/* global google  */


import React, { Component } from 'react';
import * as _ from "lodash";
import { compose, withProps, lifecycle, withStateHandlers, withHandlers, withState } from "recompose";
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
import './popup.css';


// import '../Review';

import Review from '../../Components/Review';

import Footer from '../Footer';

// var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';
var myLocationIcon = 'https://img.icons8.com/ultraviolet/40/000000/map-pin.png';

const good = "https://img.icons8.com/office/30/000000/good-quality.png";
// const good = "https://img.icons8.com/color/48/000000/approval.png";
const bad = "https://img.icons8.com/office/30/000000/poor-quality.png";

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


const demoLocations = [
  {
    position: {
      lat: 39.961491
      , lng: -75.145340
    },
    icon: {
      url: good
    }
  }
  , {
    position: {
      lat: 39.960726
      , lng: -75.143724
    },
    icon: {
      url: bad
    }
  }
  , {
    position: {
      lat: 39.940689
      , lng: -75.198807
    },
    icon: {
      url: bad
    }
  }
  , {
    position: {
      lat: 39.964158
      , lng: -75.140567
    },
    icon: {
      url: good
    }
  }
  , {
    position: {
      lat: 39.949815
      , lng: -75.144752
    },
    icon: {
      url: good
    }
  }
  , {
    position: {
      lat: 39.953800
      , lng: -75.166611
    },
    icon: {
      url: bad
    }
  }
  , {
    position: {
      lat: 39.956120
      , lng: -75.190720
    },
    icon: {
      url: good
    }
  }
];

const MapWithASearchBox = compose(

  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBVYS3YTeyILl2Cr7ajZ0ZdKbO092cW6lw&v=3.exp&libraries=geometry,drawing,places,markers",
    loadingElement: <div className="loadingElement" />,
    containerElement: <div className="containerElement" />,
    mapElement: <div className="mapElement" />
  }),


  withState('places', 'updatePlaces', ''),
  withState('selectedPlace', 'updateSelectedPlace', null),



  lifecycle({


    componentWillMount() {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          origLoc: {
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

        searchValue: "",

        handleChange: (event) => {
          this.setState({
            searchValue: event.target.value
          });
        },


        zoom: 15,

        // center: {
        //   lat: null,
        //   lng: null
        // },


        markers: [],

        reviewMarkers: [],

        onMapMounted: ref => {
          refs.map = ref;
        },

        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            isOpen: !this.state.isOpen
            // ,center: refs.map.getCenter
            // ,center: new google.maps.LatLngBounds()
          })

        },

        clearResults: () => {
          this.setState({
            markers: [],
            searchValue: ""
            // bounds: refs.map.getBounds()
          })
        },


        recenter: () => {

          // this.setState({
          //   center: this.state.origLoc,
          //   bounds: refs.map.getBounds()
          // });

          navigator.geolocation.getCurrentPosition(position => {
            this.setState({
              center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              },
              origLoc: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
            })
          })


        },


        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },


        onPlacesChanged: () => {

          // console.log(refs);

          this.setState({
            isOpen: !this.state.isOpen
          });

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
            isOpen: !this.state.isOpen
          });

          refs.map.fitBounds(bounds);
        }


      });
    }

  }),

  withScriptjs,
  withGoogleMap,

  withHandlers(() => {

    return {
      onToggleOpen: ({ updateSelectedPlace }) => key => {
        updateSelectedPlace(key);
      }

    }

  })
)(props =>


  <div className="wholeMap">

    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_CENTER}
      onPlacesChanged={props.onPlacesChanged}
    >

      <div className="container">
        <div className="row ">
          <div className="col-sm-12 ">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                className="searchInput text-left"
                type="search"
                placeholder="Search for places"
                value={props.searchValue}
                onChange={(e) => props.handleChange(e)}
              />
            </form>
          </div>
        </div>
      </div>

    </SearchBox>


    <GoogleMap
      ref={props.onMapMounted}
      defaultZoom={props.zoom}
      zoom={props.zoom}
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
    >

      <div className="clearMarkersBtn">

        <button
          className="btn btn-warning"
          onClick={props.clearResults}
        >
          Clear results
      </button>

      </div>

      <div className="recenterBtn">

        <button
          className="btn btn-info"
          onClick={props.recenter}
        >
          Recenter
        </button>

      </div>

      {
        // props.isMarkerShown &&
        <Marker
          position={props.origLoc}
          icon={{ url: myLocationIcon }}
          animation={google.maps.Animation.DROP}
        />
      }


      {props.markers && props.markers.map((marker, i) =>
        <Marker
          onClick={() => props.onToggleOpen(i)}
          key={i}
          position={marker.position}
          animation={google.maps.Animation.DROP}
        >
          {
            props.selectedPlace === i &&
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>
                < Review />
              </div>
            </InfoWindow>
          }
        </Marker>
      )}




      {demoLocations &&
        demoLocations.map((loc, i) =>
          <Marker
            onClick={() => { props.onToggleOpen("custom" + i) }}
            position={loc.position}
            key={"custom" + i}
            animation={google.maps.Animation.DROP}
            icon={loc.icon}
          >
            {
              props.selectedPlace === ("custom" + i) &&
              <InfoWindow
                onCloseClick={props.onToggleOpen}>
                <div className="customInfoBox ">
                  < Review />
                  {/* <p className="">This is the best text ever</p> */}
                </div>
              </InfoWindow>
            }
          </Marker>
        )
      }


    </GoogleMap>
    < Footer />

  </div>
);

export default MapWithASearchBox;

