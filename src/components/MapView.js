'use strict';

import React, { Component } from 'react';

export default class MapView extends Component {
	componentDidMount() {
			// const points = {lat: 40.7065670, lng: -74.0090420};
			var map = new google.maps.Map(document.getElementById('map'), {
	        center: {},
	        zoom: 13
	      });
			// var marker = new google.maps.Marker({
			// 	position: {},
			// 	map: map
			// });

			var infoWindow = new google.maps.InfoWindow({map: map});

	        // Try HTML5 geolocation.
	        if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(function(position) {
	            var pos = {
	              lat: position.coords.latitude,
	              lng: position.coords.longitude
	            };

	            // infoWindow.setPosition(pos);
	            // infoWindow.setContent('Location found.');
							var marker = new google.maps.Marker({
								position: pos,
								map: map
							});
	            map.setCenter(pos);
	          }, function() {
	            handleLocationError(true, infoWindow, map.getCenter());
	          });
	        } else {
	          // Browser doesn't support Geolocation
	          handleLocationError(false, infoWindow, map.getCenter());
	        }

					function handleLocationError(browserHasGeolocation, infoWindow, pos) {
						infoWindow.setPosition(pos);
						infoWindow.setContent(browserHasGeolocation ?
							'Error: The Geolocation service failed.' :
							'Error: Your browser doesn\'t support geolocation.');
						}
	      }

				render() {
					return (
						<div ref="map" id="map"></div>
					);
				}
	}
