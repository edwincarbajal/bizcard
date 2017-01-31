'use strict';

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MapView from './MapView';
import InformationView from './InformationView';


export default class MainView extends Component {
	componentDidMount() {
		var input = document.getElementById('pac-input');
		var serachBox = new google.maps.places.SearchBox(input);
	}

	render() {
		return (
			<div className="main-container">
				<div className="search-container row justify-content-md-center">
					<div className="col-lg-5 col-md-auto">
						<SearchBar />
					</div>
				</div>

				<div className="row">
					<div className="map-container col-md-8">
						<MapView />
					</div>
					<div className="info-container col-md-4">
						<InformationView/>
					</div>
				</div>
			</div>
		);
	}
}
