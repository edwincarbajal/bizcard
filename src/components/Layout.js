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
          <div className="">
            <ul className="list-inline">
              <li className="list-inline-item">About</li>
              <li className="list-inline-item">Changelog</li>
            </ul>
          </div>

          <div className="">
            <p>
              &copy; 2017 Bizcard
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
