const image = document.getElementsByTagName("img")[0];
const next = document.getElementById("next");
const previous = document.getElementById("prev");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

let currentIndex = 1;
let slideShowRunning = false;
let interval;

const nextImage = () => {
  if (currentIndex == 3) currentIndex = 1;
  else currentIndex++;
  image.src = `./images/${currentIndex}.jpg`;
};

const prevImage = () => {
  if (currentIndex == 1) currentIndex = 3;
  else currentIndex--;
  image.src = `./images/${currentIndex}.jpg`;
};

next.addEventListener("click", nextImage);

previous.addEventListener("click", prevImage);

start.addEventListener("click", () => {
  clearInterval(interval);
  slideShowRunning = true;
  next.setAttribute("disabled", true);
  previous.setAttribute("disabled", true);
  next.classList.add("disabled");
  previous.classList.add("disabled");
  interval = setInterval(() => {
    nextImage();
  }, 1000);
});

stop.addEventListener("click", () => {
  slideShowRunning = false;
  next.removeAttribute("disabled");
  previous.removeAttribute("disabled");
  next.classList.remove("disabled");
  previous.classList.remove("disabled");
  clearInterval(interval);
});

if (slideShowRunning) {
  setInterval(() => {
    nextImage();
  }, 1000);
}
