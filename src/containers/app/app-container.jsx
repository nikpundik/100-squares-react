import React, { Component } from 'react';
import App from './app';

import Game from '../../game/game';

class AppContainer extends Component {

  constructor() {
    super();
    this.state = {
      game: new Game(),
    }
    this.next = this.next.bind(this);
    this.restart = this.restart.bind(this);
  }

  next(square) {
    const game = this.state.game;
    game.nextSquare(square);
    this.setState({ game });
  }

  restart() {
    this.setState({ game: new Game() });
  }

  render() {
    return (
      <App
        game={this.state.game}
        stuck={this.state.game.isStuck()}
        next={this.next}
        restart={this.restart}
      />
    );
  }

}

export default AppContainer;
