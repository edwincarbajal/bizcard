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
				//the photoReference key from photoArr in first ajax call
				photoRef: 'PhotoRef',
				address: 'Address',
				phoneNumber: 'Phone Number',
				website: 'Website',
			},
			// after 2nd ajax call, update this state with the img to be rendered:
			picture: ''
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
		 // function pictureCall() { $.ajax({
			// 					 type: "GET",
			// 					 url: pictureUrl+photoRef+key,
			// 					 dataType: 'json',
			// 				 }).done((response) => {
			// 					 this.setState({
			// 						 picture: response	
			// 					 });
			// 				 });
			// 				 }	
		let id = nextProps.addressId;
		let photoRef = nextState.photoRef
		const key = '&key=AIzaSyCPV-bBnvYyA84T-Cq6xifj8hhYtPPm7mM';
		const url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';
		const pictureUrl = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=';
		$.ajax({
			type: "GET",
			url: url+id+key,
			dataType: 'json',
		}).done((response) => {
			this.setState({
				information: {
					name: response.result.name,
					photoRef: response.result.photos[3].photo_reference,
					address: response.result.formatted_address,
					phoneNumber: response.result.formatted_phone_number,
					website: response.result.website,
				},
			});
		})
		
		// make the ajax call for the photo with this call below, the response will be an image 
		// save the response to state and then render in the img tag:
		// https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference= &key=AIzaSyCPV-bBnvYyA84T-Cq6xifj8hhYtPPm7mM
		
	}

	render() {
		return (
			<div className="input-container">
				<input className="form-control" type="text" placeholder={this.state.information.name} readOnly />

				<img className="img-thumbnail" />

				<textarea className="form-control" id="exampleTextarea" rows="3" placeholder={this.state.information.address} readOnly></textarea>

				<input className="form-control" type="text" placeholder={this.state.information.phoneNumber} readOnly />

				<input className="form-control" type="text" placeholder={this.state.information.website} readOnly />

				<button type="button" className="download-btn btn btn-outline-primary btn-lg btn-block">Download vCard</button>
			</div>
		);
	}
}
