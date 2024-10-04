export default class HolbertonClass {
  // Initializes a HolbertonClass instance with size and location properties
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Gets the size of the class
  get size() {
    return this._size;
  }

  // Sets the size of the class
  set size(value) {
    this._size = value;
  }

  // Gets the location of the class
  get location() {
    return this._location;
  }

  // Sets the location of the class
  set location(value) {
    this._location = value;
  }

  // Custom behavior for converting the object to a number or string
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
