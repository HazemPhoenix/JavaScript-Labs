export class Car {
  #model;
  #year;
  constructor(m, y) {
    this.#model = m;
    this.#year = y;
  }

  setModel(m) {
    this.#model = m;
  }

  getModel() {
    return this.#model;
  }

  setYear(y) {
    this.#year = y;
  }

  getYear() {
    return this.#year;
  }

  toString() {
    return `Model: ${this.#model}, Year: ${this.#year}`;
  }
}
