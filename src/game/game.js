import Square from './square';

const SIDE = 10;
const OSTEP = 3;
const DSTEP = 2;

export default class Game {
  constructor() {
    this.current = null;
    this.squares = [];
    this.buildSquares();
    this.addDestinations();
  }

  buildSquares() {
    for (let y = 0; y < SIDE; y++) {
      for (let x = 0; x < SIDE; x++) {
        this.squares.push(new Square(x, y));
      }
    }
  }

  addDestinations() {
    this.squares.forEach((square) => {
      const left = this.getSquare(square.x - OSTEP, square.y);
      const topLeft = this.getSquare(square.x - DSTEP, square.y - DSTEP);
      const top = this.getSquare(square.x, square.y - OSTEP);
      const topRight = this.getSquare(square.x + DSTEP, square.y - DSTEP);
      const right = this.getSquare(square.x + OSTEP, square.y);
      const bottomRight = this.getSquare(square.x + DSTEP, square.y + DSTEP);
      const bottom = this.getSquare(square.x, square.y + OSTEP);
      const bottomLeft = this.getSquare(square.x - DSTEP, square.y + DSTEP);
      square.addDestination(left);
      square.addDestination(topLeft);
      square.addDestination(top);
      square.addDestination(topRight);
      square.addDestination(right);
      square.addDestination(bottomRight);
      square.addDestination(bottom);
      square.addDestination(bottomLeft);
    });
  }

  getSquare(x, y) {
    if (x < 0 || x >= SIDE || y < 0 || y >= SIDE) return null;
    return this.squares[(y * SIDE) + x];
  }

  nextSquare(square) {
    if (!this.current) {
      this.current = square;
      square.setNumber(1);
    } else if (this.current.hasDestination(square)) {
      square.setNumber(this.current.number + 1);
      this.current = square;
    }
  }

  hasNextDestination(square) {
    if (!this.current) return true;
    return this.current.hasDestination(square);
  }

  isStuck() {
    return this.current && this.current.cannotMove();
  }
}