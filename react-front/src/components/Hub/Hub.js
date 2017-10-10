import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Hub.css';

class Hub extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}


Hub.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default Hub;

