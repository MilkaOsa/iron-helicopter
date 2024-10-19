class Bullet {
  constructor(ctx, x, y) {
    // Contexto del canvas para dibujar
    this.ctx = ctx;
    
    // Posición inicial de la bala
    this.x = x;
    this.y = y;
    
    // Velocidad horizontal de la bala
    this.vx = 15;
    
    // Radio de la bala (tamaño)
    this.r = 2;
  }

  // Método para dibujar la bala en el canvas
  draw() {
    // Inicia un nuevo camino de dibujo
    this.ctx.beginPath();
    
    // Dibuja un círculo (la bala) en la posición actual
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    
    // Establece el color de relleno para la bala
    this.ctx.fillStyle = "black";
    
    // Rellena el círculo para que sea visible
    this.ctx.fill();
    
    // Cierra el camino de dibujo
    this.ctx.closePath();
  }

  // Método para mover la bala
  move() {
    // Incrementa la posición horizontal de la bala según su velocidad
    this.x += this.vx;
  }

  // Método para verificar si la bala sigue visible en el canvas
  isVisible() {
    // Retorna `true` si la bala aún está dentro de los límites del canvas
    return this.x < this.ctx.canvas.width;
  }
}
