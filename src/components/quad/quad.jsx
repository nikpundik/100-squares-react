import React from 'react';
import './quad.css';

import Square from '../square';

const Quad = ({ game, next }) => (
  <div className="quad">
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
);

export default Quad;
