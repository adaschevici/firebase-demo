import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MediumClapTraced, MediumClapFilled } from '../Icons/MediumClap';
import './Clap.css';

// const Clap = props => (props.filled ?
//   <MediumClapFilled width="150" height="150" /> :
//   <MediumClapTraced width="150" height="150" />);


class Clap extends Component {
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps);
  // }

  render() {
    return this.props.filled ?
      <MediumClapFilled width="150" height="150" /> :
      <MediumClapTraced width="150" height="150" />;
  }
}

Clap.defaultProps = {
  filled: false,
};

Clap.propTypes = {
  filled: PropTypes.bool,
};

export default Clap;
