import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Hub.css';

class Hub extends Component {

  componentDidMount() {
    this.props.listenData();
  }

  render() {
    return (
      <div className="App">
        Say hello no?
      </div>
    );
  }
}


Hub.propTypes = {
  listenData: PropTypes.func.isRequired,
};

export default Hub;

