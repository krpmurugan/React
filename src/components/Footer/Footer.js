import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="callout primary">
      <div className="row">
        <h1>Footer {this.props.name}</h1>
      </div>
    </div>
    );
  }
}

export default Footer;
