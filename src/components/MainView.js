import React from 'react';

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