"use strict";

import React from 'react';
import MapView from './MapView';
import InformationView from './InformationView';


export default class MainView extends React.Component {
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