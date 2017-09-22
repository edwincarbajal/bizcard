import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light">
          <a className="navbar-brand" href="/">
            <img src="/img/bizcard_logo.svg" width="200" height="40" alt="" />
          </a>
        </nav>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/about">About</Link>
            </li>
          </ul>

          <small className="text-muted">
            &copy; 2017 Bizcard
          </small>
        </footer>
      </div>
    );
  }
}
