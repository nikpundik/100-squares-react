import React, { Component } from 'react';

import './app.css';

import Quad from '../../components/quad';
import Twitter from '../../components/twitter';

const getTweetText = game => game.current
  ? `Reached%20${game.current.number}%20on%20100%20squares%20game!`
  : 'Will%20I%20ever%20complete%20the%20100%20squares%20game%20?%20';

class App extends Component {
  render() {
    const { game, stuck, twitter, next, restart } = this.props;
    return (
      <div className="app">
        <header className="title">
          <h1><span className="end">100</span> Squares Game</h1>
          <p>Fill numbers from 1 to 100. Skip 1 cell diagonal or 2 cells otherwise.</p>
        </header>
        <Quad game={game} next={next} />
        {stuck &&
          <div className="buttons">
            { !twitter && <button onClick={restart}>Restart</button> }
            { <Twitter text={getTweetText(game)} /> }
          </div>
        }
      </div>
    );
  }
}

export default App;
