'use strict';

import React, { Component } from 'react';

export default class MapView extends Component {
	componentDidMount() {
		let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
	}
	
	render() {
		return (
			<div ref="map" id="map"></div>
		);
	}
}
