var walls = [];
class wall {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;
    objects.push(this);
    walls.push(this);
  }
  draw() {
    strokeColor(255, 255, 255);
    strokeSize(5);
    //nofill();
    rectangle(this.x, this.y, this.size, this.size);
  }
}
