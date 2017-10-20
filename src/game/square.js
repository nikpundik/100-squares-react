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

  isAvailable() {
    return !this.number;
  }
}