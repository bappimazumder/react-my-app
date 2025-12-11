import React from 'react';

class Clock extends React.Component {
  render() {
    return (
      <h1 className="heading">
        <span className="text">
          Current time {new Date().toLocaleTimeString(this.props.locale)}
        </span>
        <img src="" alt="" />
      </h1>
    );
  }
}

export default Clock;