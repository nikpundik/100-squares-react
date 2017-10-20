import Square from './square';

it('setup an empty square', () => {
  const square = new Square();
  expect(square).toBeDefined();
  expect(square.number).toBe(null);
});

it('create a square with coords', () => {
  const square = new Square(10, 14);
  expect(square.x).toBe(10);
  expect(square.y).toBe(14);
});

it('set square number', () => {
  const square = new Square();
  square.setNumber(29);
  expect(square.number).toBe(29);
});

it('cannot reassign square number', () => {
  const square = new Square();
  square.setNumber(29);
  expect(square.number).toBe(29);
  square.setNumber(78);
  expect(square.number).toBe(29);
});

it('add destination', () => {
  const square = new Square(5, 5);
  const destination = new Square(7, 7);
  square.addDestination(destination);
  expect(square.destinations).toHaveLength(1);
  square.addDestination(null);
  expect(square.destinations).toHaveLength(1);
});

it('has destination', () => {
  const square = new Square(5, 5);
  const destination = new Square(7, 7);
  const noDestination = new Square(7, 8);
  square.addDestination(destination);
  expect(square.hasDestination(destination)).toBeTruthy();
  expect(square.hasDestination(noDestination)).toBeFalsy();
});

it('has no available destinations', () => {
  const square = new Square(5, 5);
  const destination = new Square(7, 7);
  square.addDestination(destination);
  expect(square.cannotMove()).toBeFalsy();
  destination.setNumber(5);
  expect(square.cannotMove()).toBeTruthy();
});

it('get available destinations', () => {
  const square = new Square(5, 5);
  const destination1 = new Square(7, 7);
  const destination2 = new Square(5, 8);
  square.addDestination(destination1);
  square.addDestination(destination2);
  destination2.setNumber(5);
  expect(square.getAvailableDestinations()).toHaveLength(1);
});
