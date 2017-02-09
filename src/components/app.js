import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Rap Libs
        {this.props.children}
      </div>

    );
  }
}
