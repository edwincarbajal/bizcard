"use strict";

import React, { Component } from 'react';

export default class InformationView extends Component {
	render() {
		return (
			<div className="container">
				<li className="information">
					<h1>Information View</h1>
					<span className="name col-xs-3 list-group-item">{this.props.name}Dev Bootspace</span>
					<span className="picture col-xs-3 list-group-item">{this.props.picture}Picture</span>
					<span className="address col-xs-3 list-group-item">{this.props.address}48 Wall St.<br/> New York, NY 10001</span>
					<span className="phone col-xs-3 list-group-item">{this.props.phone}(808)888-8888</span>
					<span className="website col-xs-3 list-group-item">{this.props.website}www.karz4kids.com</span>
				</li>
			</div>
		)
	}
}
