import React from 'react';
import './square.css';

const getClassName = (square, current, destination) => {
  let className = 'square';
  if (square.isAvailable()) className += ' empty';
  if (current) className += ' current';
  if (destination) className += ' destination';
  return className;
};

const Square = ({ square, current, destination, next }) => (
  <div
    className={getClassName(square, current, destination)}
    onClick={() => next(square)}
  >
    <span className="number">{square.number}</span>
  </div>
);

export default Square;