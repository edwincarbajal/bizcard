'use strict';

import React, { Component } from 'react';

export default class MapView extends Component {

	componentDidMount() {
		const points = {lat: 40.8325080, lng: -73.9184370};
		const map = new google.maps.Map(document.getElementById('map'), {
        center: points,
        zoom: 13
      });
		const marker = new google.maps.Marker({
			position: points,
			map: map
		})
	}

	render() {
		return (
			<div ref="map" id="map"></div>
		);
	}
}
