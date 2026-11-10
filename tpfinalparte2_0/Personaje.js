
class Personaje {
  constructor() {
    this.x = 12;
    this.y = 12;
    this.tamaño = 20;
    this.velocidad = 3;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= this.velocidad;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.velocidad;
    }

    this.x = constrain(this.x, 0, width - this.tamaño);
    this.y = constrain(this.y, 0, height - this.tamaño);
  }

  dibujar() {
    fill(255, 0, 0);
    noStroke();
    circle(
      this.x + this.tamaño / 2,
      this.y + this.tamaño / 2,
      this.tamaño
    );
  }
}
