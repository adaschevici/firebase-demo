import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Atendee.css';

import Clap from '../../components/Clap/Clap.container';

class Atendee extends Component {
  componentWillMount() {
    this.props.join();
  }

  render() {
    return (
      <div className="App">
        <Clap />
      </div>
    );
  }
}

Atendee.propTypes = {
  join: PropTypes.func.isRequired,
};

export default Atendee;
