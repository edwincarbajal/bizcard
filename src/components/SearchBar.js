'use strict';

import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <input className="form-control mr-sm-2" type="text" placeholder="Search..." />
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbbMsn8y8GkRINWIvi6Y1U4xX2q3wU9IM&libraries=places"></script>
      </form>
    );
  }
}
