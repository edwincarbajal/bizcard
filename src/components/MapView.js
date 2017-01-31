'use strict';

import React, { Component } from 'react';

export default class MapView extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		points: null
  	};
  	this.initMap;
  	this.handleLocationError;
  };


      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
   
    

	// componentDidMount() {
	// 	const points = {lat: 40.8325080, lng: -73.9184370};
	// 	const map = new google.maps.Map(document.getElementById('map'), {
 //        center: points,
 //        zoom: 13
 //      });
	// 	const marker = new google.maps.Marker({
	// 		position: points,
	// 		map: map
	// 	})
	// }

	render() {
		return (
			<div ref="map" id="map"></div>
		);
	}
}
