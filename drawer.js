function rectangle(x, y, w, h) {
  render.beginPath(); // commence le dessin
  render.rect(x, y, w, h); // un rectangle positionné à x,y de taille w,h
  render.fill(); // remplis cette zone avec une couleur
  render.stroke(); // avec un contour
}

function fillColor(r, g, b) {
  r = String(r);
  g = String(g);
  b = String(b);
  render.fillStyle = "rgb(" + r + "," + g + ", " + b + ")";
}

function strokeSize(size) {
  render.lineWidth = String(size);
}

function background(r, g, b) {
  fillColor(r, g, b);
  rectangle(0, 0, width, height);
}

function strokeColor(r, g, b) {
  r = String(r);
  g = String(g);
  b = String(b);
  render.strokeStyle = "rgb(" + r + "," + g + ", " + b + ")";
}

function noStroke() {
  render.strokeStyle = "rgba(0, 0, 0, 0)";
}

function noFill() {
  render.fillStyle = "rgba(0, 0, 0, 0)";
}
function line(x1, y1, x2, y2) {
  render.beginPath(); // on commence le dessin
  render.moveTo(x1, y1); // coordoné de la fin la ligne
  render.lineTo(x2, y2); // coordonée de la fin de la ligne
  render.stroke(); // On trace un contour pour dessinger le trait.
}
function circle(x, y, r) {
  render.beginPath();
  render.arc(x, y, r, 0, 2 * Math.PI);
  render.fill();
  render.stroke();
}
