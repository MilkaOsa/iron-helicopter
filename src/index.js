// Obtén el contexto 2D del canvas para dibujar
const ctx = document.getElementById('canvas').getContext('2d');

// Crea una instancia del juego pasando el contexto del canvas
const game = new Game(ctx);

// Inicia el juego
game.start();

// Escucha eventos de teclado para manejar el control del helicóptero
document.addEventListener('keydown', (e) => {
  game.onKeyEvent(e); // Llama al método para manejar la tecla presionada
});

document.addEventListener('keyup', (e) => {
  game.onKeyEvent(e); // Llama al método para manejar la tecla soltada
});
