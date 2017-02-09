'use strict';

import React, { Component } from 'react';
import $ from 'jquery';

export default class InformationView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addressId: '',
			information: {
				name: 'Name',
				address: 'Address',
				phoneNumber: 'Phone Number',
				website: 'Website',
			},
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			addressId: nextProps,
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
    // return a boolean value
    return true;
	}

	componentWillUpdate(nextProps, nextState) {
		let id = nextProps.addressId;
		const url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';
		const key = '&key=AIzaSyCPV-bBnvYyA84T-Cq6xifj8hhYtPPm7mM';
		$.ajax({
			type: "GET",
			url: url+id+key,
			dataType: 'json',
		}).done((response) => {
			this.setState({
				information: {
					name: response.result.name,
					address: response.result.formatted_address,
					phoneNumber: response.result.formatted_phone_number,
					website: response.result.website,
				},
			});
		});
	}

	render() {
		return (
			<div className="input-container">
				<input className="form-control" type="text" placeholder={this.state.information.name} readOnly />

				<img src="..." alt="..." className="img-thumbnail" />

				<textarea className="form-control" id="exampleTextarea" rows="3" placeholder={this.state.information.address} readOnly></textarea>

				<input className="form-control" type="text" placeholder={this.state.information.phoneNumber} readOnly />

				<input className="form-control" type="text" placeholder={this.state.information.website} readOnly />

				<button type="button" className="download-btn btn btn-outline-primary btn-lg btn-block">Download vCard</button>
			</div>
		);
	}
}
