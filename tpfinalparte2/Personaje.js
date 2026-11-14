class Personaje {
  constructor() {
    this.x = 1;
    this.y = 1;
    this.tamaño = 25;

    //retraso de movimiento del jugador
    this.velocidad = 150;
    this.tiempoAnterior = 0;

    // Sistema de vidas
    this.vida = 3;
    //this.miColor = color(252, 69, 8);

    // Sistema de invulnerabilidad
    this.invulnerabilidad = false;
    this.tiempoInvulnerabilidad = 0;
  }

  mover(laberinto) {

    if (this.vida <= 0) return;

    if (millis() - this.tiempoAnterior > this.velocidad) {

      let nuevaX = this.x;
      let nuevaY = this.y;

      if (keyIsDown(LEFT_ARROW)) {
        nuevaX--;
      } else if (keyIsDown(RIGHT_ARROW)) {
        nuevaX++;
      } else if (keyIsDown(UP_ARROW)) {
        nuevaY--;
      } else if (keyIsDown(DOWN_ARROW)) {
        nuevaY++;
      }

      if (!laberinto.esPared(nuevaX, nuevaY)) {
        this.x = nuevaX;
        this.y = nuevaY;
      }

      this.tiempoAnterior = millis();
    }
  }

  dibujar() {

    this.controlarInvulnerabilidad();
    this.estadoVida();
    noStroke();

    tint(this.oscuridad);

    image(imgJugador,
      this.x * this.tamaño,
      this.y * this.tamaño,
      this.tamaño,
      this.tamaño
      );

    noTint();
  }

// CAMBIO DE OSCURIDAD SEGUN LAS VIDAS
estadoVida() {

  if (this.vida === 3) {
    this.oscuridad = 255;

  } else if (this.vida === 2) {
    this.oscuridad = 170;

  } else if (this.vida === 1) {
    this.oscuridad = 85;

  } else if (this.vida <= 0) {
    this.Muerto();
  }
}

  // CONTROL DE INVULNERABILIDAD
  controlarInvulnerabilidad() {

    if (this.invulnerabilidad) {

      this.tiempoInvulnerabilidad++;

      if (this.tiempoInvulnerabilidad >= 60) {

        this.invulnerabilidad = false;
        this.tiempoInvulnerabilidad = 0;
      }
    }
  }

  // RECIBIR DAÑO
  recibirDaño() {

    if (!this.invulnerabilidad && this.vida > 0) {

      this.vida--;

      this.invulnerabilidad = true;
      this.tiempoInvulnerabilidad = 0;
    }
  }

  // MUERTE DEL PERSONAJE
  Muerto() {
    this.vida = 0;
    this.miColor = color(0);
  }
}
