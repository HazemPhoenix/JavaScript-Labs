const button = document.getElementsByTagName("button")[0];
const submit = document.getElementById("submit");
let smallWindow;

button.onclick = () => {
  smallWindow = window.open(
    "./smallWindow.html",
    parent,
    "width=500, height=500"
  );

  let scrollValue = 0;
  let innerHeight = window.innerHeight;
  const int = setInterval(() => {
    smallWindow.scroll(0, scrollValue);
    let scrollHeight = smallWindow.document.body.scrollHeight;
    if (innerHeight + smallWindow.scrollY > scrollHeight) {
      clearInterval(int);
      smallWindow.close();
      smallWindow.document.write("Hazem"); // doesn't work because the window is closed
    }
    scrollValue += 1000;
  }, 100);
};

// Task "2"
console.log(document.getElementsByTagName("img")); // returns an HTML collection containing the images (Method 1)
console.log(document.images); // returns an HTML collection containing the images (Method 2)

const city = document.getElementById("city");
console.log(city.options);

const table = document.getElementsByTagName("table")[1];
const rows = table.rows;
console.log(rows);

const elements = document.getElementsByClassName("fontBlue BGrey");
console.log(elements);

// Task "4"
setInterval(() => {
  document.title = new Date().toLocaleString();
}, 1000);

const str = location.search.substring(1);
if (str) {
  const arr = str.split("&");
  const name = arr[0].split("=")[1];
  const age = arr[1].split("=")[1];

  const obj = {
    name,
    age,
  };

  console.log(obj);
}
