function dibujarfondos() {
  for (let i = 0; i < fondos.length; i++) {
    let x= -500-movimiento * velocidades[i];
    image(fondos[i], x, 0, fondos[i].width * 1.5, fondos[i].height * 1.5);

    if (estado != "CORRER") {
      movimiento = -48;
    }
  }
}

function dibujarpiso() {
  for (let i = 0; i < width / piso.width + 1; i++) {
    image(piso, i * piso.width, 500);
  }
}
