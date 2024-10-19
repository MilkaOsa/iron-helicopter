class Obstacle {
  constructor(ctx) {
    // Contexto del canvas para dibujar
    this.ctx = ctx;
    
    // Posición inicial del obstáculo (aparece fuera del canvas a la derecha)
    this.x = this.ctx.canvas.width;
    
    // Distancia vertical del obstáculo desde el borde superior o inferior del canvas
    this.dist = Math.random() * 100 + 300; // Aleatorio entre 300 y 400

    // Posición vertical del obstáculo:
    // Si el valor aleatorio es mayor que 0.5, el obstáculo empieza arriba y se dibuja hacia abajo.
    // Si es menor o igual a 0.5, empieza abajo y se dibuja hacia arriba.
    this.y = Math.random() > 0.5 ? 0 - this.dist : this.ctx.canvas.height - this.dist;
    
    // Ancho del obstáculo aleatorio entre 50 y 90
    this.w = Math.random() * 40 + 50;
    
    // Altura del obstáculo también variable para dar variedad a los obstáculos
    this.h = Math.random() * (this.ctx.canvas.height / 2) + 50; // Aleatorio entre 50 y la mitad de la altura del canvas
    
    // Velocidad horizontal del obstáculo (se mueve hacia la izquierda)
    this.vx = -3;
  }

  // Método para dibujar el obstáculo en el canvas
  draw() {
    this.ctx.fillStyle = "green"; // Color de los obstáculos (puedes cambiarlo)
    this.ctx.fillRect(
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  // Método para mover el obstáculo
  move() {
    // Mueve el obstáculo hacia la izquierda
    this.x += this.vx;
  }

  // Método para verificar si el obstáculo aún es visible en la pantalla
  isVisible() {
    // Retorna `true` si el obstáculo aún es visible (en cualquier parte del canvas)
    return this.x + this.w > 0;
  }
}
