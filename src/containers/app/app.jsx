import React, { Component } from 'react';
import './app.css';

import Quad from '../../components/quad';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="title">100 Squares Game</h1>
        <Quad squares={this.props.game.squares} next={this.props.next} />
      </div>
    );
  }
}

export default App;
