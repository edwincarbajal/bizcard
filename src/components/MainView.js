"use strict";

import React, { Component } from 'react';
import MapView from './MapView';
import InformationView from './InformationView';


export default class MainView extends Component {
	render() {
		return (
			<div className="main-container">
				<div className="map-view">
					<MapView/>
				</div>
				<div className="information-view">
					<InformationView/>
				</div>
			</div>
		)
	}
}
