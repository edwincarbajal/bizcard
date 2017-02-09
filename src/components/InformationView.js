'use strict';

import React, { Component } from 'react';
import $ from 'jquery';

export default class InformationView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addressId: '',
			information: {},
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
		const key = '&key=AIzaSyCjOJON60_XCD-Ulvo98ai4gthTykt-sCE';
		$.ajax({
			url: url+id+key,
			type: "GET",
			dataType: "jsonp",
			crossDomain: true,
			cache: false
		}).done((response) => {
			this.setState({
				information: response,
			});
		});
	}

	render() {

		return (
			<div className="input-container">
				<input className="form-control" type="text" placeholder="Name" readOnly />

				<img src="..." alt="..." className="img-thumbnail" />

				<textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Address" readOnly></textarea>

				<input className="form-control" type="text" placeholder="Phone number" readOnly />

				<input className="form-control" type="text" placeholder="Website" readOnly />

				<button type="button" className="download-btn btn btn-outline-primary btn-lg btn-block">Download vCard</button>
			</div>
		);
	}
}
