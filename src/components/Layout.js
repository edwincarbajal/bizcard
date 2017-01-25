import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="#">Bizcard</a>
        </nav>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <div className="col-12 col-md-auto">
            <p>
              <a href="#">
                About
              </a>
              <span>
                Changelog
              </span>
            </p>
          </div>
          <div className="col-12 col-md-auto">
            <p>
              &copy; 2017 Bizcard
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
