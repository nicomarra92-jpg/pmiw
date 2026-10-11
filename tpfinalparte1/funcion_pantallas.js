


function crearBotonImagen(img, x, y, ancho, alto, texto) {
  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    tint(100);
    image(img, x, y, ancho, alto);

    tint(255);
    fill(0, 200, 200);
    text(texto, mouseX, mouseY - 10);
  } else {
    tint(255);
    image(img, x, y, ancho, alto);
  }
}

function cargarFondoPantalla(img, texto, textoY = 380, textoAlto =70) {
  tint(255);
  image(img, 0, 0, 800, 350);

  fill(255);
  text(texto, 50, textoY, 750, textoAlto);
}
