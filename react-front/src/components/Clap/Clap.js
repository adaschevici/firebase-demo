import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MediumClapTraced } from '../Icons/MediumClap';
import Confetti from '../Icons/Confetti';
import './Clap.css';

class Clap extends Component {
  render() {
    return ([
      <MediumClapTraced width="150" height="150" />,
      <Confetti />,
    ]);
  }
}

Clap.propTypes = {
  clap: PropTypes.func.isRequired,
};

export default Clap;
