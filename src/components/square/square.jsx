import React from 'react';
import './square.css';

const Square = ({ square, next }) => (
  <div
    className="square"
    onClick={() => next(square)}
  >
    {square.number}
  </div>
);

export default Square;