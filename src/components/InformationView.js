"use strict";

import React from 'react';

export default class InformationView extends React.Component {
	render() {
		return (
			<li className="information">
				<h1>Information View</h1>
				<span className="name">{this.props.name}</span>
				<span className="address">{this.props.address}</span>
				<span className="phone">{this.props.phone}</span>
				<span className="website">{this.props.website}</span>
			</li>
		)
	}
}