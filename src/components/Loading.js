import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div style = {{textAlign:'center'}}>
        Planet Data is being fetched, hold tight!
      </div>
    )
  }
}

export default Loading;
