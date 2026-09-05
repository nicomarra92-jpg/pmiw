function arquero2()
{
  if (estado2 == "CORRER") {

    frame2 = floor(frameCount / 5) % 8;

    if (desplazarse2 < 200) {

      desplazarse2 += 3;

      image(corre2[frame2], desplazarse2-150, 400, 80, 100);

    } else {

      desplazarse2 = 200;
      estado2 = "IDLE";
      inicioEstado2 = frameCount;
    }

  } else if (estado2 == "DISPARAR") {

    frame2 = floor((frameCount - inicioEstado2) / 3);

    if (frame2 < 33) {

      image(dispara2[frame2 % 11], desplazarse2-150, 400, 110, 100);

      if (frame2 >= 6) {
        moverFlecha = true;
      }

    } else {

      estado2 = "IDLE";
      inicioEstado2 = frameCount;
    }

  } else if (estado2 == "IDLE") {

    frame2 = floor((frameCount - inicioEstado2) / 8) % 5;

    image(quieto2[frame2], desplazarse2-150, 400, 80, 100);
  }
}
