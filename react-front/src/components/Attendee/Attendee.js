import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Attendee.css';

import Clap from '../../components/Clap/Clap';

const DumbTinsel = () => (<div className="u-absolute u-top0 u-left0 u-disablePointerEvents u-width260 u-height260">
  <div className="u-absolute u-top0 u-left0 u-disablePointerEvents u-width60 u-height60 js-clapRadial--dots"
    style={{ animation: "burst-dot 370ms ease-out 1 running" }}>
    <div className="clapRadial clapRadial--dot" style={{ transform: "rotate(144.33174492327535deg)" }}></div>
    <div className="clapRadial clapRadial--dot" style={{ transform: "rotate(216.33174492327535deg)" }}></div>
    <div className="clapRadial clapRadial--dot" style={{ transform: "rotate(288.3317449232753deg)" }}></div>
    <div className="clapRadial clapRadial--dot" style={{ transform: "rotate(360.3317449232753deg)" }}></div>
    <div className="clapRadial clapRadial--dot" style={{ transform: "rotate(432.3317449232753deg)" }}></div>
  </div>
  <div className="u-absolute u-top0 u-left0 u-disablePointerEvents u-width60 u-height60 js-clapRadial--triangles"
    style={{ animation: "burst-triangle 370ms ease-out 1 running" }}>
    <div className="clapRadial clapRadial--triangle" style={{ transform: "rotate(157.33174492327535deg)" }}></div>
    <div className="clapRadial clapRadial--triangle" style={{ transform: "rotate(229.33174492327535deg)" }}></div>
    <div className="clapRadial clapRadial--triangle" style={{ transform: "rotate(301.3317449232753deg)" }}></div>
    <div className="clapRadial clapRadial--triangle" style={{ transform: "rotate(373.3317449232753deg)" }}></div>
    <div className="clapRadial clapRadial--triangle" style={{ transform: "rotate(445.3317449232753deg)" }}></div>
  </div>
</div>);

class Tinsel extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return this.props.boom;
  }

  render() {
    return this.props.boom ? <DumbTinsel /> : null;
  }
}

Tinsel.propTypes = {
  boom: PropTypes.bool.isRequired,
};

class Atendee extends Component {
  constructor(props) {
    super(props);
    this.clap = this.clap.bind(this);
    this.release = this.release.bind(this);
    this.state = ({
      boom: false,
    });

    this.confettiClass = 'button button--large button--circle button--withChrome u-baseColor--buttonNormal button--withIcon button--withSvgIcon clapButton js-actionMultirecommendButton clapButton--largePill u-relative u-foreground u-width60 u-height60 u-accentColor--textNormal u-accentColor--buttonNormal is-touched';
    this.pulsatingClass = 'button button--large button--circle button--withChrome u-baseColor--buttonNormal button--withIcon button--withSvgIcon clapButton js-actionMultirecommendButton clapButton--largePill u-relative u-foreground u-accentColor--textNormal u-accentColor--buttonNormal is-touched';
  }

  componentWillMount() {
    // this.props.join();
  }

  clap() {
    this.props.clap();
    this.setState({
      boom: true,
    });
  }

  release() {
    this.setState({
      boom: false,
    });
  }

  render() {
    return (
      <button
        className={this.pulsatingClass}
        style={{ top: 14, padding: 2 }}
        onClick={this.clap}
        onTouchStart={this.clap}
        onTouchEnd={this.release}
      >
        <Clap filled={this.state.boom} />
        <Tinsel boom={this.state.boom} />
      </button>
    );
  }
}

Atendee.propTypes = {
  join: PropTypes.func.isRequired,
  clap: PropTypes.func.isRequired,
};

export default Atendee;
