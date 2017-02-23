'use strict';

import React, { Component } from 'react';

export default class MapView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: props.position.lat,
			lng: props.position.lng,
		}
	}

	componentDidMount() {
			var map = new google.maps.Map(document.getElementById('map'), {
	        center: {},
	        zoom: 13
	      	});

			var infoWindow = new google.maps.InfoWindow({map: map});

	        // Try HTML5 geolocation.
	        if (navigator.geolocation) {
	          navigator.geolocation.getCurrentPosition(function(position) {
	            var pos = {
	              lat: position.coords.latitude,
	              lng: position.coords.longitude
	            };
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

	componentWillReceievProps(nextProps) {
		this.setState({
			lat: props.position.lat,
			lng: props.position.lng,
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	
	componentWillUpdate(nextProps, nextState) {
		  var myLatLng = {
		  	lat: nextProps.position.lat, 
		  	lng: nextProps.position.lng
		  };

		  var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 16,
		    center: myLatLng
		  });

		  var marker = new google.maps.Marker({
		    position: myLatLng,
		    map: map,
		    title: 'Hello World!'
		  });
	}
	
	render() {
		return (
			<div ref="map" id="map"></div>
		);
	}
}
