import React, { Component } from 'react';
import './app.css';

import Quad from '../../components/quad';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="title">
          <h1>100 Squares Game</h1>
          <p>Fill numbers from 1 to 100. Skip 1 cell diagonal or 2 cells otherwise.</p>
        </header>
        <Quad squares={this.props.game.squares} next={this.props.next} />
      </div>
    );
  }
}

export default App;
