'use strict';

import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import MyCustomInput from './MyCustomInput';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ''
    }
    this.onChange = (address) => this.setState({ address });
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault()
    const { address } = this.state

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) {
        console.log('Oh no!', err)
      }

      console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
    });
  }
  render() {
    return (
      <PlacesAutocomplete  value={this.state.address} onChange={this.onChange}>
        <MyCustomInput />
      </PlacesAutocomplete>
    );
  }
}
