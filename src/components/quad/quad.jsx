import React from 'react';
import './quad.css';

import Square from '../square';

import bg from '../../assets/bg.png';

const Quad = ({ game, next }) => (
  <div className="quad">
    <img src={bg} />

    <div className="squares">
    { game.squares.map((square) => (
      <Square
        key={`${square.x}${square.y}`}
        square={square}
        next={next}
        current={game.current === square}
        destination={game.hasNextDestination(square)}
      />
    ))}
    </div>
  </div>
);

export default Quad;
