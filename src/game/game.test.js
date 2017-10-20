import Game from './game';
import Square from './square';

it('setup an empty game', () => {
  const game = new Game();
  expect(game).toBeDefined();
});

it('a game has 100 squares', () => {
  const game = new Game();
  expect(game.squares).toHaveLength(100);
  expect(game.squares[0]).toBeInstanceOf(Square);
  expect(game.squares[0].x).toBe(0);
  expect(game.squares[0].y).toBe(0);
  expect(game.squares[99].x).toBe(9);
  expect(game.squares[99].y).toBe(9);
});

it('get square at coord', () => {
  const game = new Game();
  let square = game.getSquare(5, 6);
  expect(square.x).toBe(5);
  expect(square.y).toBe(6);
  square = game.getSquare(8, 1);
  expect(square.x).toBe(8);
  expect(square.y).toBe(1);
  square = game.getSquare(9, 9);
  expect(square.x).toBe(9);
  expect(square.y).toBe(9);
  square = game.getSquare(11, 1);
  expect(square).toBeNull();
});

it('assign squares destinations', () => {
  const game = new Game();

  let square = game.getSquare(0, 0);
  let destinations = square.getAvailableDestinations();
  expect(destinations).toHaveLength(3);

  square = game.getSquare(9, 9);
  destinations = square.getAvailableDestinations();
  expect(destinations).toHaveLength(3);

  square = game.getSquare(5, 5);
  destinations = square.getAvailableDestinations();
  expect(destinations).toHaveLength(8);
});

it('next square', () => {
  const game = new Game();

  const square = game.getSquare(0, 0);

  game.nextSquare(square);
  expect(square.number).toBe(1);

  game.nextSquare(square);
  expect(game.current.number).toBe(1);
  expect(square.number).toBe(1);

  game.nextSquare(game.getSquare(3, 0));
  expect(game.current.number).toBe(2);
  expect(square.number).toBe(1);
});
