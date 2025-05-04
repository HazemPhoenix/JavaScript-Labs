import { Car } from "./CarModule.js";

export class FlyingCar extends Car {
  #canFly;
  constructor(m, y, canFly = true) {
    super(m, y);
    this.#canFly = canFly;
  }

  toString() {
    return `${super.toString()}. I believe i can flyyyyyy!`;
  }

  setCanFly(canFly) {
    this.#canFly = canFly;
  }

  getCanFly() {
    return this.#canFly;
  }
}
