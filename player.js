class player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;
    objects.push(this);
  }
  step() {
    //this.x = mouseX;
    //this.y = mouseY;
    if (keyDown.W) this.y += 64;
  }

  draw() {
    strokeColor(255, 255, 255);
    strokeSize(5);
    //nofill();
    rectangle(this.x, this.y, this.size, this.size);
  }
}
