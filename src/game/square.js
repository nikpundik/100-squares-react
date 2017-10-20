export default class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.number = null;
    this.destinations = [];
  }

  setNumber(n) {
    if (!this.number) this.number = n;
  }

  addDestination(d) {
    if (d) this.destinations.push(d);
  }

  getAvailableDestinations() {
    return this.destinations.filter(d => d.isAvailable());
  }

  hasDestination(square) {
    return this.destinations.indexOf(square) !== -1;
  }

  isAvailable() {
    return !this.number;
  }

  cannotMove() {
    return this.getAvailableDestinations().length === 0;
  }
}