'use strict';

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MapView from './MapView';
import InformationView from './InformationView';
import $ from 'jquery';


export default class MainView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			position: {
				lat: null,
				lng: null
			},
			addressId: '',
		}
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	componentDidMount() {
		const input = document.getElementById('pac-input');
		const searchBox = new google.maps.places.SearchBox(input);
	}

	shouldComponentUpdate(nextProps, nextState){
    // return a boolean value
    return true;
	}

	// add styling to searchbar //
	handleMouseOver(el) {
		const input = el.target;
		const button = input.nextElementSibling.children[0];
		button.className += ' btn-primary';
	}

	handleMouseLeave(el) {
		const input = el.target;
		const button = input.nextElementSibling.children[0];
		button.classList.remove('btn-primary');
	}
	// end styling //

	handleSearchInput(e) {
		e.preventDefault();

		const input = e.target.value;
		this.setState({
			address: input,
		});
		console.log(`The current state of the address is: ${this.state.address}`);
	}

	handleSearchClick() {
		const address = this.state.address;
		const parsedAddress = address.replace(/, United States/, '').replace(/,/g, '').replace(/\s/g, "+");
		const geocode = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
		const key = '&key=AIzaSyCPV-bBnvYyA84T-Cq6xifj8hhYtPPm7mM';
		
		if (!address){
			alert('Please enter a valid address!')
		} else {
			$.ajax({
				// call the geocode api with current address state
				// address needs to be spaced i.e 48+Wall+St
				url: geocode+parsedAddress+key
				// change the state of postion object with response from api
			}).done((response) => {
				const addressLat = response.results[0].geometry.location.lat;
				const addressLng = response.results[0].geometry.location.lng;
				const addressId = response.results[0].place_id;
				this.setState({
					position: {
						lat: addressLat,
						lng: addressLng
					},
					addressId: addressId,
				});
			});
		}
		// catch any errors
	}

	render() {
		return (
			<div className="main-container">
				<div className="search-container row justify-content-md-center">
					<div className="col-lg-5 col-md-auto">
						<div className="row">
							<div className="col-lg-12">
								<div className="input-group">
									<input id="pac-input" className="controls form-control" onSelect={this.handleSearchInput} onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} type="text" placeholder="Search for a business..." />
									<span className="input-group-btn">
										<button id="search-bar-submit" className="btn" type="button" onClick={this.handleSearchClick}><i className="fa fa-search" aria-hidden="true"></i></button>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="map-container col-md-8">
						<MapView position={this.state.position}/>
					</div>
					<div className="info-container col-md-4">
						<InformationView addressId={this.state.addressId}/>
					</div>
				</div>
			</div>
		);
	}
}
