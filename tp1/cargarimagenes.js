function cargarImagenes() {

  for (let i = 0; i < 6; i++) {
    fondos[i] = loadImage("sprites/fondos/fondo" + (i + 1) + ".png");
  }
  piso = loadImage("sprites/fondos/piso.png");

  for (let i = 0; i < 8; i++) {
    correr[i] = loadImage("sprites/arquero/corre" + (i + 1) + ".png");
  }
  for (let i = 0; i < 5; i++) {
    quieto[i] = loadImage("sprites/arquero/quieto" + (i + 1) + ".png");
  }
  for (let i = 0; i < 5; i++) {
    impacto[i] = loadImage("sprites/arquero/danio" + (i + 1) + ".png");
  }
  for (let i = 0; i < 4; i++) {
    muerte[i] = loadImage("sprites/arquero/muerte" + (i + 1) + ".png");
  }
  for (let i = 0; i < 2; i++) {
    caido[i] = loadImage("sprites/arquero/caido" + (i + 1) + ".png");
  }
  for (let i = 0; i < 8; i++) {
    corre2[i] = loadImage("sprites/arquero2/corre" + (i + 1) + ".png");
  }

  for (let i = 0; i < 5; i++) {
    quieto2[i] = loadImage("sprites/arquero2/quieto" + (i + 1) + ".png");
  }

  for (let i = 0; i < 11; i++) {
    dispara2[i] = loadImage("sprites/arquero2/dispara" + (i + 1) + ".png");
  }

  flecha = loadImage("sprites/arquero2/arrow.png");
  gameOver = loadImage("sprites/gameover.png");
}
