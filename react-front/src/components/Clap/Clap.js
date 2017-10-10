import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clap from '../../assets/clap.svg';
import './Clap.css';

class Clap extends Component {
  render() {
    return (
      <div align="center" className="container" onClick={this.props.clap}>
        <img src={clap} className="clapping" alt="clapping" />
      </div>
    );
  }
}

Clap.propTypes = {
  clap: PropTypes.func.isRequired,
};

export default Clap;
