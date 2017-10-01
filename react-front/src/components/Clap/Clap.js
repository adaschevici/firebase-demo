import React, { Component } from 'react';
import clap from '../../assets/clap.svg';
import './Clap.css';



class Clap extends Component {
  render() {
    return (
      <div align="center" className="container">
        <img src={clap} className="clapping" alt="clapping" />
      </div>
    );
  }
}

export default Clap;
