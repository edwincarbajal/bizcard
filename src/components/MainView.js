'use strict';

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MapView from './MapView';
import InformationView from './InformationView';


export default class MainView extends Component {
	constructor(props) {
		super(props) 
			this.state = {
				place: ''
			}
			this.handleFormSubmit = this.handleFormSubmit.bind(this);
		
	}

	handleFormSubmit(event) {
		event.preventDefault()
		$.ajax({

		}).done((response) => {
			this.setState({
				place: reponse
			});
		});


	};

	// Create the search box and link it to the UI element.
	componentDidMount() {
		var input = document.getElementById('pac-input');
		var searchBox = new google.maps.places.SearchBox(input);
	}

	render() {
		return (
			<div className="main-container">
				<div className="search-container row justify-content-md-center">
					<div className="col-lg-5 col-md-auto">
						<div className="row">
							<div className="col-lg-12 input-group">
								<input id="pac-input" className="controls form-control" type="text" placeholder="Search Box" />
								<span className="input-group-btn">
        							<button className="btn btn-default" type="button">Find</button>
      							</span>
							</div>
						</div>
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
