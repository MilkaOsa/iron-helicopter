class Game {
  constructor(ctx) {
    // Contexto del canvas para dibujar
    this.ctx = ctx;
    
    // Identificador del intervalo para el bucle del juego
    this.intervalId = null;
    
    // Contador de ticks para controlar la creación de obstáculos
    this.tick = 0;
    
    // Inicializa el fondo, el helicóptero y el array de obstáculos
    this.bg = new Background(ctx);
    this.helicopter = new Helicopter(ctx);
    this.obstacles = [];
  }

  // Método para iniciar el juego
  start() {
    // Crea un intervalo que ejecuta el ciclo del juego a 60 FPS (1000 ms / 60)
    this.intervalId = setInterval(() => {
      this.clear();           // Limpia el canvas
      this.draw();            // Dibuja todos los elementos
      this.move();            // Mueve los elementos del juego
      this.addObstacle();     // Agrega nuevos obstáculos según el tiempo
      this.checkCollisions(); // Verifica colisiones entre el helicóptero y los obstáculos
    }, 1000 / 60);
  }

  // Método para agregar un nuevo obstáculo cada 100 ticks
  addObstacle() {
    if (this.tick++ % 100 === 0) {
      // Crea un nuevo obstáculo y lo agrega al array de obstáculos
      this.obstacles.push(new Obstacle(this.ctx));
    }
  }

  // Método para limpiar el canvas
  clear() {
    // Borra todo el contenido del canvas para dibujar el siguiente frame
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  // Método para dibujar todos los elementos en el canvas
  draw() {
    this.bg.draw(); // Dibuja el fondo
    this.helicopter.draw(); // Dibuja el helicóptero
    this.obstacles.forEach((obstacle) => obstacle.draw()); // Dibuja cada obstáculo
  }

  // Método para mover los elementos del juego
  move() {
    this.bg.move(); // Mueve el fondo
    this.helicopter.move(); // Mueve el helicóptero
    this.obstacles.forEach((obstacle) => obstacle.move()); // Mueve cada obstáculo
  }

  // Método para manejar eventos de teclado y enviarlos al helicóptero
  onKeyEvent(event) {
    this.helicopter.onKeyEvent(event);
  }

  // Método para verificar colisiones entre el helicóptero y los obstáculos
  checkCollisions() {
    this.obstacles.forEach((obstacle) => {
      if (
        this.helicopter.x < obstacle.x + obstacle.w && // Verifica si el borde izquierdo del helicóptero toca el borde derecho del obstáculo
        this.helicopter.x + this.helicopter.w > obstacle.x && // Verifica si el borde derecho del helicóptero toca el borde izquierdo del obstáculo
        this.helicopter.y < obstacle.y + obstacle.h && // Verifica si el borde superior del helicóptero toca el borde inferior del obstáculo
        this.helicopter.y + this.helicopter.h > obstacle.y // Verifica si el borde inferior del helicóptero toca el borde superior del obstáculo
      ) {
        this.gameOver(); // Si hay colisión, termina el juego
      }
    });
  }

  // Método para finalizar el juego
  gameOver() {
    clearInterval(this.intervalId); // Detiene el bucle del juego
    alert("Game Over"); // Muestra un mensaje de Game Over
  }
}
