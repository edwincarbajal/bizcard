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
			// this.handleFormSubmit = this.handleFormSubmit.bind(this);
		
	}

	// handleFormSubmit(event) {
	// 	$.ajax({
	// 		method: 'GET',
	// 		url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=pos&radius=1000&key=AIzaSyDEnDR2l0rNeMjl8b5guxbSQrX4rkEtgVU`,
	// 		data: { place: event.action }
	// 	}).done((response) => {
	// 		this.setState({
	// 			place: reponse
	// 		});
	// 	});


	// };

	// Create the search box and link it to the UI element.
	componentDidMount() {
		var input = document.getElementById('pac-input');
		var searchBox = new google.maps.places.SearchBox(input);
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
		var currentResults = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${pos}&radius=1000&key=AIzaSyDEnDR2l0rNeMjl8b5guxbSQrX4rkEtgVU`
		console.log(currentResults);

			            infoWindow.setPosition(pos);
			            infoWindow.setContent('Location found.');
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
			<div className="main-container">
				<div className="search-container row justify-content-md-center">
					<div className="col-lg-5 col-md-auto">
						<div className="row">
							<div className="col-lg-12 input-group">
								<input id="pac-input" className="controls form-control" type="text" name="place" placeholder="Search Box" />
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
