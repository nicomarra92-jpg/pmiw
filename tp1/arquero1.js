function arquero1() {
  if (estado == "CORRER") {


    frame = floor(frameCount / 5) % 8;

    if (desplazarse < 700) {

      desplazarse += 3;

      image(correr[frame], desplazarse, 400, 80, 100);
    } else {

      desplazarse = 700;
      estado = "IDLE";
      inicioquieto = frameCount;
      estado2 = "DISPARAR";
      inicioEstado2 = frameCount;
    }
  } else if (estado == "IDLE") {


    frame = floor(frameCount / 8) % 5;

    push();

    translate(desplazarse, 400);
    scale(-1, 1);

    image(quieto[frame], -65, 0, 80, 100);

    pop();

    if (frameCount - inicioquieto > 60) {
      estado = "IMPACTO";
    }
  } else if (estado == "IMPACTO") {


    frame = floor(frameCount / 6) % 5;

    push();

    translate(desplazarse, 400);
    scale(-1, 1);

    image(impacto[frame], -65, 0, 80, 100);

    pop();

    if (frameCount - inicioquieto > 140) {
      estado = "MUERTE";
    }
  } else if (estado == "MUERTE") {


    frame = floor(frameCount / 120) % 4;

    push();

    translate(desplazarse, 400);
    scale(-1, 1);

    image(muerte[frame], -65, 0, 80, 100);

    pop();

    if (frameCount - inicioquieto > 60) {
      estado = "CAIDA";
    }
  } else if (estado == "CAIDA") {


    frame = floor(frameCount / 20) % 2;

    push();

    translate(desplazarse, 400);
    scale(-1, 1);

    image(caido[frame], -65, 38, 120, 60);

    pop();
  }
  moverGameOver = true;
}
