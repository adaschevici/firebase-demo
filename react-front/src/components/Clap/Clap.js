import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MediumClapTraced, MediumClapFilled } from '../Icons/MediumClap';
import './Clap.css';

const Clap = props => (props.filled ?
  <MediumClapFilled width="150" height="150" /> :
  <MediumClapTraced width="150" height="150" />);

Clap.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default Clap;
