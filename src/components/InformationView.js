'use strict';

import React, { Component } from 'react';
import $ from 'jquery';

export default class InformationView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addressId: '',
			stockImg: '',
			information: {
				name: 'Name',
				address: 'Address',
				phoneNumber: 'Phone Number',
				website: 'Website',
				photoRef: '',
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
		const proxy = 'https://cors-anywhere.herokuapp.com/';
		const url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';
		const key = '&key=AIzaSyCPV-bBnvYyA84T-Cq6xifj8hhYtPPm7mM';

		$.getJSON({
			type: "GET",
			url: proxy+url+id+key,
			dataType: 'json'
		}).done((response) => {
			this.setState({
				information: {
					name: response.result.name,
					address: response.result.formatted_address,
					phoneNumber: response.result.formatted_phone_number,
					website: response.result.website,
					photoRef: response.result.photos[0].photo_reference,
				},
			});
		});
	}

	render() {
		let photo_ref = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.state.information.photoRef}&key=AIzaSyCPV-bBnvYyA84T-Cq6xifj8hhYtPPm7mM`;
		let { information } = this.state;
		return (
			<div className="input-container">
				<input className="form-control" type="text" placeholder={information.name} readOnly />

				<img src={this.state.information.photoRef ? photo_ref : '/img/stock_img.svg'} alt="..." className="img-thumbnail" />

				<textarea className="form-control" id="exampleTextarea" rows="3" placeholder={information.address} readOnly></textarea>

				<input className="form-control" type="text" placeholder={information.phoneNumber} readOnly />

				<input className="form-control" type="text" placeholder={information.website} readOnly />

				<button type="button" className="download-btn btn btn-outline-primary btn-lg btn-block">Download vCard</button>
			</div>
		);
	}
}
