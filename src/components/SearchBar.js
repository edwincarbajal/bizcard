'use strict';

import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <input className="form-control mr-sm-2" type="text" placeholder="Search..." />
      </form>
    );
  }
}
