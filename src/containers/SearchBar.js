import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// controlled field is where the term of the input is set by the state of our Component

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  // Fat arrow function binds the function to the event
  handleChange = event => {
    this.setState({ term: event.target.value });
  };

  // Fat arrow function binds the function to the event
  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      // If inpput is inside a form, pressing "enter" key will submit. This is free functionality. Do NOT need to setup onEnter event or onPressSubmitButton event.
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          className="form-control"
          placeholder="Get a Five-Day Forecast of Your Favorite Cities!"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

// Maps the action to allow us to use it in SearchBar and run it through all reducers
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// Pass in null because we don't need Redux state in this Component
export default connect(null, mapDispatchToProps)(SearchBar);
