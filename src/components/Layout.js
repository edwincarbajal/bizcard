import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <div className="alert alert-danger" role="alert">This page is currently under construction. Please check back soon as we are updating constantly.</div> */}
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="/">
            <img src="/img/bizcard_logo.svg" width="200" height="40" alt="" />
          </a>
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
