import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item active">
          Cras justo odio
        </li>
        <li className="list-group-item">
          Cras justo odio
        </li>
      </ul>
    );
  }
}
