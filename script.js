class Engine {
  constructor() {
    if (new.target.name == "Engine")
      throw new Error("This class cannot be instaniated");

    Engine.#count++;
  }
  static #count = 0;
  getCount() {
    return Engine.#count;
  }
}

class Car extends Engine {
  #top;
  #left;
  #imgSrc;
  #direction = "right";
  #node;
  #width;
  constructor(t, l, i, w = 200) {
    super();
    this.#top = t;
    this.#left = l;
    this.#imgSrc = i;
    this.#width = w;
    this.#node = document.createElement("img");
    document.body.appendChild(this.#node);
    this.renderCar();
  }

  setTop(t) {
    this.#top = t;
  }

  getTop() {
    return this.#top;
  }

  setLeft(l) {
    this.#left = l;
  }

  getLeft() {
    return this.#left;
  }

  setImg(src) {
    this.#imgSrc = src;
  }

  moveRight() {
    this.#direction = "right";
    this.#left += 10;
    this.renderCar();
  }

  moveLeft() {
    this.#direction = "left";
    if (this.#left > 0) this.#left -= 10;
    this.renderCar();
  }

  moveCar(dir) {
    const interval = setInterval(() => {
      if (dir == "right") {
        if (this.#left >= window.innerWidth - this.#width) {
          dir = "left";
          this.changeDirection();
        }
        this.moveRight();
      } else if (dir == "left") {
        if (this.#left == 0) {
          dir = "right";
          this.changeDirection();
        }
        this.moveLeft();
      }
    }, 10);
  }

  renderCar() {
    document.body.removeChild(this.#node);
    this.#node.src = this.#imgSrc;
    this.#node.setAttribute("width", `${this.#width}`);
    this.#node.style.position = "absolute";
    this.#node.style.top = `${this.#top}px`;
    this.#node.style.left = `${this.#left}px`;
    if (this.#direction == "right") this.#node.style.transform = "scaleX(-1)";
    else this.#node.style.transform = "scaleX(1)";
    document.body.appendChild(this.#node);
  }

  changeDirection() {
    if (this.#direction == "right") this.#direction = "left";
    else this.#direction = "right";
  }
}

let car1 = new Car(50, 0, "./images/car-free-svg-cut-file-1.png", 300);
let car2 = new Car(300, 0, "./images/car-free-svg-cut-file-1.png", 250);
let car3 = new Car(600, 0, "./images/car-free-svg-cut-file-1.png", 200);

car1.moveCar("right");
car2.moveCar("right");
car3.moveCar("right");
