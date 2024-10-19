class Background {
  constructor(ctx) {
    // Contexto del canvas para dibujar
    this.ctx = ctx;
    
    // Ancho y alto del canvas
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    
    // Posición inicial de la imagen
    this.x = 0;
    this.y = 0;

    // Velocidad horizontal del fondo
    this.vx = -2;

    // Cargar la imagen de fondo
    this.img = new Image();
    this.img.src = "https://image.freepik.com/free-vector/sky-day-game-background_7814-306.jpg";
  }

  // Método para dibujar la imagen de fondo
  draw() {
    // Dibuja la imagen en la posición actual
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    
    // Dibuja una segunda imagen a la derecha de la primera para crear un efecto de bucle
    this.ctx.drawImage(
      this.img, 
      this.x + this.ctx.canvas.width, 
      this.y, 
      this.w, 
      this.h
    );
  }

  // Método para mover la imagen de fondo
  move() {
    // Mueve el fondo hacia la izquierda
    this.x += this.vx;

    // Si la primera imagen ha salido completamente del canvas, reinicia su posición
    if (this.x + this.w <= 0) {
      this.x = 0;
    }
  }
}
