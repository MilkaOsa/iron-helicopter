class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.tick = 0;

    this.bg = new Background(ctx);
    this.helicopter = new Helicopter(ctx);
    this.obstacles = [];
  }

  start() {
    // TODO: loop. clear, draw, move, addObstacle
    this.intervalId =  setInterval (() => {
      this.clear();
      this.draw();
      this.move();
     }, 1000/60);
  }

  addObstacle() {
    // TODO: add new Obstacle every 100 ticks
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
      this.bg.draw();
      this.helicopter.draw();
  }

  move() {
    this.bg.move();
    this.helicopter.move();
  }

  onKeyEvent(event) {
    // TODO
  }
}

