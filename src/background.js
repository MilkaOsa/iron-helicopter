class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0

    this.vx = -2

    this.img = new Image()
    this.img.src = "https://image.freepik.com/free-vector/sky-day-game-background_7814-306.jpg"
  }

  draw() {
    // Dibuja la imagen en la posición actual
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    
    // Dibuja una segunda imagen a la derecha de la primera
    this.ctx.drawImage(
      this.img, 
      this.x + this.ctx.canvas.width, 
      this.y, 
      this.w, 
      this.h);
  }

  move() {
    // Mueve el fondo hacia la izquierda
    this.x += this.vx;

    // Si la primera imagen ha salido completamente del canvas, reinicia su posición
    if (this.x + this.w <= 0) {
      this.x = 0;
  }
}
}