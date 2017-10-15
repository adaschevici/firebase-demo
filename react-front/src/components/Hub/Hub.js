import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bubbles from '../../components/Bubbles/Bubbles.container';
import './Hub.css';

class Hub extends Component {

  componentDidMount() {
    this.props.listenData();
  }

  render() {
    return (
      <div className="hub-container">
        <Bubbles />
      </div>
    );
  }
}


Hub.propTypes = {
  listenData: PropTypes.func.isRequired,
};

export default Hub;

