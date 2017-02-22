'use strict';

import React, { Component } from 'react';
import $ from 'jquery';
import vcards from 'vcards-js';

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
				photoRef: '',
			},
		}
		// this.createVcard = this.createVcard.bind(this);
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
		// const key = '&key=AIzaSyCrGYiVUGU5xJEhczYc-rVybtobuXmMkv8'
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
					photoRef: response.result.photos[0].photo_reference,
				},
			});
		});
	}

	// splitAddress(address) {
	// //Splits the address into array, split on commas.
	// //Splits the State and Zip code into array.
	// return splitAddy
	// return splitStateZip
	// }

	// createVcard() {
	// 	const fs = require('fs');
	// 	console.log(fs)
	// 	let vCard = require('vcards-js');

	// 	vCard = vCard();

	// 	// splitAddress(this.state.address)
	// 	// let address = this.state.address
	// 	// let splitAddy = address.split(/[,]/)
	// 	// let splitStateZip = splitAddy[2].replace(/ /, '')

	// 	// let name = this.state.information.name;

	// 	vCard.organization = this.state.information.name;
	// 	// vCard.workAddress.street = splitAddy[0],
	// 	// vCard.workAddress.city = splitAddy[1],
	// 	// vCard.workAddress.stateProvince = splitStateZip[0],
	// 	// vCard.workAddress.postalCode = splitStateZip[1],
	// 	// vCard.workAddress.country.Region = splitAddy[3]
	// 	vCard.homePhone = this.state.information.phoneNumber

	// 	vCard.saveToFile('./bizcard.vcf');
	// }

	render() {
		let photo_ref = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.state.information.photoRef}&key=AIzaSyCPV-bBnvYyA84T-Cq6xifj8hhYtPPm7mM`
		// let splitStreetAddy = ''
		// let splitStateZip = ''

		return (
			<div className="input-container">
				<input className="form-control" type="text" placeholder={this.state.information.name} readOnly />

				<img src={photo_ref} alt="..." className="img-thumbnail" />

				<textarea className="form-control" id="exampleTextarea" rows="3" placeholder={this.state.information.address} readOnly></textarea>

				<input className="form-control" type="text" placeholder={this.state.information.phoneNumber} readOnly />

				<input className="form-control" type="text" placeholder={this.state.information.website} readOnly />

				<button type="button" className="download-btn btn btn-outline-primary btn-lg btn-block">Download vCard</button>
			</div>
		);
	}
}
