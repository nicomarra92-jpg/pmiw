class Personaje {
  constructor() {
    this.posX = 10;
    this.posY = 400;
    this.miColor = color(252, 69, 8);
    this.vida = 3;
    this.golpeado = false;
    this.invul = false;
    this.tiempoInvul = 0;
  }

  dibujar() {
    fill(this.miColor);
    rect(this.posX, this.posY, 30, 30);
    this.mover();
    this.estadoVida();
  }

  //Movimiento
  mover() {
    if (this.vida > 0) {
      if (keyIsDown(RIGHT_ARROW)) {
        this.posX += 3;
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.posX -= 3;
      }
      if (keyIsDown(UP_ARROW)) {
        this.posY -= 3;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.posY += 3;
      }
    }
  }

  //cambio de color de vida
  estadoVida() {
    if (this.vida === 3) {
      this.miColor = color(252, 69, 8);
    }

    if (this.vida === 2) {
      this.miColor = color(150, 53, 21);
    }

    if (this.vida === 1) {
      this.miColor = color(110, 43, 21);
    }

    if (this.vida === 0) {
      this.Muerto();
    }
  }

  controlarInvul() {
    //aca definimos que invul al crearse tiene el valor de timpo invul, empieza a sumar
    if (this.invul) {
      this.tiempoInvul++;

//aca hacemos que tiempo invul al ser mayor a 60 frmaes(1 segundo) 
//la inuvlnerabilidad desaparesca, y el contador de tiempo vuelva a cero
      if (this.tiempoInvul >= 60) {
        this.invul = false;
        this.tiempoInvul = 0;
      }
    }
  }


  //verifica si esta muert
  Muerto() {
    this.vida = 0;
    this.miColor = color(0);
  }
}
