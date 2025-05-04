import { Car } from "./CarModule";

export class FlyingCar extends Car {
  #canFly = true;
  constructor(m, y) {
    super(m, y);
  }

  toString() {
    return `${super.toString()}. And i can Fly!!`;
  }
}
