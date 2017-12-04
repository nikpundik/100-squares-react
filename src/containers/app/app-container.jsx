import React, { Component } from 'react';
import App from './app';

import Game from '../../game/game';

class AppContainer extends Component {

  constructor() {
    super();
    this.state = {
      game: new Game(),
      stuck: false,
      twitter: true,
    }
    this.next = this.next.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  next(square) {
    const game = this.state.game;
    game.nextSquare(square);

    const stuck = game.isStuck();
    if (stuck && !this.state.stuck) {
      this.tick = 0;
      this.timer();
    }

    this.setState({ game, stuck });
  }

  timer() {
    this.interval = setTimeout(() => {
      this.tick += 1;
      if (this.tick > 3) this.setState({ twitter: false });
      else this.timer();
    }, 1000);
  }

  restart() {
    this.setState({ game: new Game(), stuck: false, twitter: true });
  }

  render() {
    return (
      <App
        game={this.state.game}
        stuck={this.state.stuck}
        twitter={this.state.twitter}
        next={this.next}
        restart={this.restart}
      />
    );
  }

}

export default AppContainer;
