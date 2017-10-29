import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Attendee.css';

import Clap from '../../components/Clap/Clap.container';

class Atendee extends Component {
  componentWillMount() {
    // this.props.join();
  }

  render() {
    return (
      <div className="u-relative u-foreground">
        <button className="button button--large button--circle button--withChrome u-baseColor--buttonNormal button--withIcon button--withSvgIcon clapButton js-actionMultirecommendButton clapButton--largePill u-relative u-foreground u-width60 u-height60 u-accentColor--textNormal u-accentColor--buttonNormal is-active" style={{ animation: 'pop 500ms 1 running' }}>
          <Clap />
        </button>
      </div>
    );
  }
}

Atendee.propTypes = {
  join: PropTypes.func.isRequired,
};

export default Atendee;
