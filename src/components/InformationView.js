'use strict';

import React, { Component } from 'react';

export default class InformationView extends Component {
	render() {
		return (
			<div className="input-container">
				<input className="form-control" type="text" placeholder="Name" readOnly />

				<img src="..." alt="..." className="img-thumbnail" />

				<textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Address" readOnly></textarea>

				<input className="form-control" type="text" placeholder="Phone number" readOnly />

				<input className="form-control" type="text" placeholder="Website" readOnly />

				<button type="button" className="btn btn-outline-primary btn-lg btn-block">Download vCard</button>
			</div>
		);
	}
}
