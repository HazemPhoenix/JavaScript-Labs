const button = document.getElementsByTagName("button")[0];
let smallWindow;

button.addEventListener("click", () => {
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
    }
    scrollValue += 1000;
  }, 100);
});
