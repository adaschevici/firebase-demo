import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Attendee.css';

import Clap from '../../components/Clap/Clap.container';

class Atendee extends Component {
  constructor(props) {
    super(props);
    this.confettiClass = 'button button--large button--circle button--withChrome u-baseColor--buttonNormal button--withIcon button--withSvgIcon clapButton js-actionMultirecommendButton clapButton--largePill u-relative u-foreground u-width60 u-height60 u-accentColor--textNormal u-accentColor--buttonNormal is-touched';
    this.pulsatingClass = 'button button--large button--circle button--withChrome u-baseColor--buttonNormal button--withIcon button--withSvgIcon clapButton js-actionMultirecommendButton clapButton--largePill u-relative u-foreground u-accentColor--textNormal u-accentColor--buttonNormal is-touched';
  }

  componentWillMount() {
    // this.props.join();
  }

  render() {
    return (
      <button className={this.pulsatingClass} style={{ top: 14, padding: 2 }}>
        <Clap />
      </button>
    );
  }
}

Atendee.propTypes = {
  join: PropTypes.func.isRequired,
};

export default Atendee;
