import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MediumClapTraced } from '../Icons/MediumClap';
import Confetti from '../Icons/Confetti';
import './Clap.css';

class Clap extends Component {
  render() {
    return (
      <div align="center" className="container" onClick={this.props.clap}>
        <MediumClapTraced width="150" height="150" />
        <Confetti />
      </div>
    );
  }
}

Clap.propTypes = {
  clap: PropTypes.func.isRequired,
};

export default Clap;
