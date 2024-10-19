// Clase Helicopter para manejar la lógica de un helicóptero en el juego
class Helicopter {
  constructor(ctx) {
    // Contexto del canvas para dibujar
    this.ctx = ctx;
    
    // Control de animación
    this.tick = 0;
    
    // Posición inicial del helicóptero
    this.x = 100;
    this.y = this.ctx.canvas.height / 2; // Comienza desde la mitad del canvas

    // Dimensiones del helicóptero
    this.w = 100;
    this.h = 40;
    
    // Velocidades y aceleraciones
    this.vx = 0; // Velocidad en el eje X
    this.vy = 0; // Velocidad en el eje Y
    this.ax = 0; // Aceleración en el eje X
    this.ay = 0; // Aceleración en el eje Y
    this.g = 0.1; // Gravedad que afecta al helicóptero

    // Configuración de la imagen del helicóptero (spritesheet)
    this.img = new Image();
    this.img.src = "https://2.bp.blogspot.com/-P6ZbLE-rnFM/WPTQh65UtMI/AAAAAAAABF8/9iYl-cIUEtIhj2JDTixyqZNeBn183AdmQCLcB/s1600/helicopter-spritesheet.png";
    this.img.frames = 4; // Número de frames en el spritesheet
    this.img.frameIndex = 0; // Frame actual del spritesheet

    // Inicializa el arma del helicóptero
    this.weapon = new Weapon(this);
  }

  // Método para dibujar el helicóptero en el canvas
  draw() {
    // Dibuja el helicóptero usando el frame actual del spritesheet
    this.ctx.drawImage(
      this.img,
      0, 
      (this.img.frameIndex / this.img.frames) * this.img.height, // Calcula el origen vertical del frame
      this.img.width,
      this.img.height / this.img.frames, // Altura de un solo frame
      this.x,
      this.y, 
      this.w,
      this.h
    );

    // Incrementa el contador de ticks para controlar la animación
    this.tick++;
    if (this.tick > 10) {
      this.tick = 0;
      this.img.frameIndex++; // Cambia al siguiente frame
      if (this.img.frameIndex > 2) {
        this.img.frameIndex = 0; // Reinicia la animación al primer frame
      }
    }

    // Dibuja el arma del helicóptero
    this.weapon.draw();
  }

  // Método para mover el helicóptero según su velocidad y aceleración
  move() {
    // Actualiza la velocidad con la aceleración y la gravedad
    this.vy += this.ay + this.g;
    this.vx += this.ax;

    // Actualiza la posición con la velocidad
    this.x += this.vx;
    this.y += this.vy;

    // Limitar el movimiento del helicóptero dentro del canvas
    if (this.y + this.h >= this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.h; // Mantener dentro del límite inferior
      this.vy = 0; // Detener la velocidad vertical
    } else if (this.y <= 0) {
      this.y = 0; // Mantener dentro del límite superior
      this.vy = 0; // Detener la velocidad vertical
    }
  }

  // Manejo de eventos de teclado para controlar el movimiento del helicóptero
  onKeyEvent(event) {
    if (event.type === "keydown") {
      switch (event.keyCode) {
        case UP:
          this.ay = -0.5; // Aceleración hacia arriba
          break;
        case RIGHT:
          this.ax = 0.5; // Aceleración hacia la derecha
          break;
        case LEFT:
          this.ax = -0.5; // Aceleración hacia la izquierda
          break;
        case SPACE:
          this.weapon.shoot(); // Disparar el arma
          break;
      }
    } else if (event.type === "keyup") {
      switch (event.keyCode) {
        case UP:
          this.ay = 0; // Detener la aceleración vertical
          break;
        case RIGHT:
        case LEFT:
          this.ax = 0; // Detener la aceleración horizontal
          break;
      }
    }
  }
}
