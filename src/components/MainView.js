'use strict';

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MapView from './MapView';
import InformationView from './InformationView';


export default class MainView extends Component {
	constructor(props) {
		super(props);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	componentDidMount() {
		const input = document.getElementById('pac-input');
		const searchBox = new google.maps.places.SearchBox(input);
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

	render() {
		return (
			<div className="main-container">
				<div className="search-container row justify-content-md-center">
					<div className="col-lg-5 col-md-auto">
						<div className="row">
							<div className="col-lg-12">
								<div className="input-group">
									<input id="pac-input" className="controls form-control" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} type="text" placeholder="Search for a business..." />
									<span className="input-group-btn">
										<button id="search-bar-submit" className="btn" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
									</span>
								</div>
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
