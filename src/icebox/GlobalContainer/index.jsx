import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export class PlacesMap extends Component {
  state = {
    currentLocation: {
      lat: lat,
      lng: lng
    }
  }


  initAutocomplete() {

    const map = new google.maps.Map(document.getElementById('map'), {

      center: {
        lat: this.state.currentLocation.lat,
        lng: this.state.currentLocation.lat
      },
      zoom: 13,
      mapTypeId: 'roadmap'

    });

    // Create the search box and link it to the UI element.
    const input = document.getElementById('pac-input');

    let searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
      searchBox.setBounds(map.getBounds());
    });

    let markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
      
      let places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function (marker) {
        marker.setMap(null);
      });

      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();

      places.forEach(function (place) {

        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }

      });

      map.fitBounds(bounds);

    });

  }

}


export default CurrentLocation;
