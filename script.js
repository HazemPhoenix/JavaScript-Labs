class Engine {
  #imgSrc;
  constructor(s) {
    if (new.target.name == "Engine")
      throw new Error("This class cannot be instaniated");
    this.#imgSrc = s;
    Engine.#count++;
  }
  static #count = 0;
  getCount() {
    return Engine.#count;
  }

  setImg(s) {
    this.#imgSrc = s;
  }

  getImg() {
    return this.#imgSrc;
  }
}

class Car extends Engine {
  #top;
  #left;
  #direction = "right";
  #node;
  #width;
  #speed;
  constructor(t, l, i, w = 200, s = 10) {
    super(i);
    this.#top = t;
    this.#left = l;
    this.#width = w;
    this.#node = document.createElement("img");
    this.#speed = s;
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

  moveRight() {
    this.#direction = "right";
    this.#left += 5;
    this.renderCar();
  }

  moveLeft() {
    this.#direction = "left";
    if (this.#left > 0) this.#left -= 5;
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
    }, this.#speed);
  }

  renderCar() {
    document.body.removeChild(this.#node);
    this.#node.src = this.getImg();
    this.#node.setAttribute("width", `${this.#width}`);
    this.#node.style.position = "absolute";
    this.#node.style.top = `${this.#top}px`;
    this.#node.style.left = `${this.#left}px`;
    if (this.#direction == "left") this.#node.style.transform = "scaleX(-1)";
    else this.#node.style.transform = "scaleX(1)";
    document.body.appendChild(this.#node);
  }

  changeDirection() {
    if (this.#direction == "right") this.#direction = "left";
    else this.#direction = "right";
  }
}

let car1 = new Car(50, 0, "./images/car1.png", 300);
let car2 = new Car(420, 0, "./images/car2.svg", 250, 1);
let car3 = new Car(600, 0, "./images/car3.svg", 250, 5);

car1.moveCar("right");
car2.moveCar("right");
car3.moveCar("right");
