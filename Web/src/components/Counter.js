import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="middle-align">
        <img src="./couple.svg" alt="couple"></img>
        <h2>{this.props.time}</h2>
        <h2>{this.props.isCountdown ? 'until' : 'since'}</h2>
        <h1>
          {this.props.bride} {this.props.isCountdown ? 'weds' : 'wed'}{' '}
          {this.props.groom}
        </h1>
      </div>
    );
  }
}

Counter.propTypes = {
  bride: PropTypes.string.isRequired,
  groom: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isCountdown: PropTypes.bool.isRequired
};
