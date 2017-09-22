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
		 const piedpiper = new google.maps.LatLng(37.448458, -122.139729);
		 const map = new google.maps.Map(document.getElementById('map'), {
	    center: piedpiper,
	    zoom: 13
  	});
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
