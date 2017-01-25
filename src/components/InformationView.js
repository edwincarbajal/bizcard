"use strict";

import React, { Component } from 'react';

export default class InformationView extends Component {
	render() {
		return (
			<div className="container">
				<li className="information">
					<h1>Information View</h1>
					<span className="col-xs-1 list-group-item">{this.props.name}<h1>NAME</h1></span>
					<span className="col-xs-1 list-group-item">{this.props.picture}<h1>PICTURE</h1></span>
					<span className="col-xs-1 list-group-item">{this.props.address}<h1>ADDRESS</h1></span>
					<span className="col-xs-1 list-group-item">{this.props.phone}<h1>PHONE</h1></span>
					<span className="col-xs-1 list-group-item">{this.props.website}<h1>WEBSITE</h1></span>
				</li>
			</div>
		)
	}
}
