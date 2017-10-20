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
  }

  next(square) {
    const game = this.state.game;
    game.nextSquare(square);
    this.setState({ game });
  }

  render() {
    return <App game={this.state.game} next={this.next} />;
  }

}

export default AppContainer;
