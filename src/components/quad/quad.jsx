import React from 'react';
import './quad.css';

import Square from '../square';

const Quad = ({ squares, next }) => (
  <div className="quad">
    { squares.map((square) => (
      <Square key={`${square.x}${square.y}`} square={square} next={next} />
    ))}
  </div>
);

export default Quad;
