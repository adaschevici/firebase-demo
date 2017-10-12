import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Hub.css';
import Bubbles from '../../components/Bubbles/Bubbles.container';

class Hub extends Component {

  componentDidMount() {
    this.props.listenData();
  }

  render() {
    return (
      <div className="App">
        <Bubbles />
      </div>
    );
  }
}


Hub.propTypes = {
  listenData: PropTypes.func.isRequired,
};

export default Hub;

