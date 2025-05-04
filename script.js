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
  #width;
  constructor(t, l, i, w = 200) {
    super();
    this.#top = t;
    this.#left = l;
    this.#imgSrc = i;
    this.#width = w;
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
    document.body.innerHTML = "";
    const img = document.createElement("img");
    img.src = this.#imgSrc;
    img.setAttribute("width", `${this.#width}`);
    img.style.position = "absolute";
    img.style.top = `${this.#top}px`;
    img.style.left = `${this.#left}px`;
    if (this.#direction == "right") img.style.transform = "scaleX(-1)";
    document.body.appendChild(img);
  }

  changeDirection() {
    if (this.#direction == "right") this.#direction = "left";
    else this.#direction = "right";
  }
}

let car = new Car(100, 0, "./images/car-free-svg-cut-file-1.png", 300);
