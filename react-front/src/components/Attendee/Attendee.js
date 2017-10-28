import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Attendee.css';

import Clap from '../../components/Clap/Clap.container';

class Atendee extends Component {
  componentWillMount() {
    this.props.join();
  }

  render() {
    return (
      <div className="Attendee">
        <Clap />
      </div>
    );
  }
}

Atendee.propTypes = {
  join: PropTypes.func.isRequired,
};

export default Atendee;
