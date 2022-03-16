var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d");
var width;
var height;

/* Pour initialiser le backGround */
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function () {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  Player.draw();
  /*
  background(25, 25, 25);

  noFill();
  strokeColor(0, 255, 0); // Stroke rectangle
  strokeSize(2);
  rectangle(25, 25, 50, 100);
  strokeColor(0, 0, 255); // Stroke Line
  line(50, 100, 25, 300);
  strokeColor(255, 0, 0); // Stroke Circle
  fillColor(255, 255, 0); // FillCercle
  strokeSize(10);
  circle(200, 200, 67);
  */
};

window.onresize();
/*
function line(x1, y1, x2, y2) {
  render.moveTo(x1, y1);
  render.lineTo(x2, y2);
  render.stroke();
}
*/
