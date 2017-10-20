import React, { Component } from 'react';
import './app.css';

import Quad from '../../components/quad';

class App extends Component {
  render() {
    const { game, stuck, next, restart } = this.props;
    return (
      <div className="app">
        <header className="title">
          <h1>100 Squares Game</h1>
          <p>Fill numbers from 1 to 100. Skip 1 cell diagonal or 2 cells otherwise.</p>
        </header>
        <Quad game={game} next={next} />
        {stuck &&
          <div>
            <button onClick={restart}>restart</button>
          </div>
        }
      </div>
    );
  }
}

export default App;
