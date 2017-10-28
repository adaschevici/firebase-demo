import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MediumClapFilled, MediumClapTraced } from '../Icons/MediumClap';
import './Clap.css';

class Clap extends Component {
  render() {
    return (
      <div align="center" className="container" onClick={this.props.clap}>
        <MediumClapFilled width="90" height="90" />
        <MediumClapTraced width="90" height="90" />
      </div>
    );
  }
}

Clap.propTypes = {
  clap: PropTypes.func.isRequired,
};

export default Clap;
