class Weapon {
  constructor(shooter) {
    // Referencia al objeto que dispara (el helicóptero en este caso)
    this.shooter = shooter;

    // Array para almacenar las balas disparadas
    this.bullets = [];
  }

  // Método para disparar una nueva bala
  shoot() {
    // Crea una nueva instancia de `Bullet` con la posición inicial ajustada
    const bullet = new Bullet(
      this.shooter.ctx,
      this.shooter.x + this.shooter.w * 0.8, // Posición horizontal (frente del helicóptero)
      this.shooter.y + this.shooter.h * 0.9  // Posición vertical (cerca de la parte inferior del helicóptero)
    );

    // Agrega la nueva bala al array de balas
    this.bullets.push(bullet);
  }

  // Método para eliminar las balas que ya no son visibles
  clearBullets() {
    // Filtra solo las balas que siguen siendo visibles en el canvas
    this.bullets = this.bullets.filter(b => b.isVisible());
  }

  // Método para dibujar todas las balas en el canvas
  draw() 
}
   
