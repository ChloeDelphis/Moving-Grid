const app = {
  init: function () {
    cursorElmt = document.querySelector(".cursor");
    clientWidth = document.body.clientWidth;
    innerHeight = window.innerHeight;
    document.addEventListener("mousemove", (e) => app.getMousePosition(e));

    window.addEventListener("mousedown", (e) => app.mouseClickHandler());
    window.addEventListener("mouseup", (e) => app.mouseClickHandler());
  },

  getMousePosition(e) {
    let x = e.clientX;
    let y = e.clientY;

    // console.log("x " + x);
    // console.log("y " + y);

    app.moveCursor(x, y);
    app.moveBackgrounds(x, y);
    app.moveGrid(x, y);
  },

  moveCursor(x, y) {
    cursorElmt.style.left = x + "px";
    cursorElmt.style.top = y + "px";
  },

  moveBackgrounds(x, y) {
    // let clientHeight = document.body.clientHeight;
    // let innerWidth = window.innerWidth;

    // console.log("body client width " + clientWidth);
    // console.log("window inner width " + innerWidth);

    // console.log("window client height " + clientHeight);
    // console.log("window inner height " + innerHeight);

    const imgElmts = document.querySelectorAll(".grid__item > div");
    // console.log("imgElmts");

    for (let imgElmt of imgElmts) {
      // console.log(imgElmt);
      imgElmt.style.backgroundPosition =
        (x * 95) / clientWidth + "%" + (y * 95) / innerHeight + "%";
    }
  },

  moveGrid(x, y) {
    const gridElmt = document.querySelector(".grid");
    gridElmt.style.top = (y / innerHeight) * -2 + "%";
    gridElmt.style.left = (x / clientWidth) * -2 + "%";
  },

  mouseClickHandler() {
    cursorElmt.classList.toggle("wider");
  },
};

document.addEventListener("DOMContentLoaded", app.init);
