class player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;
  }
  draw() {
    strokeColor(0, 255, 0);
    strokeSize(5);
    //nofill();
    rectangle(this.x, this.y, this.size, this.size);
  }
}

var Player = new player(50, 50);
