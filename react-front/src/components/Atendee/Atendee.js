import React, { Component } from 'react';
import './Atendee.css';

import Clap from '../../components/Clap/Clap.container';

class Atendee extends Component {
  componentWillMount() {
    this.props.join();
  }
  render() {
    return (
      <div className="App">
        <Clap />
      </div>
    );
  }
}

export default Atendee;
