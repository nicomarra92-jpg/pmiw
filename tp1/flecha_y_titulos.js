function flechazo() {

  if (moverFlecha) {


    if (moverFlecha) {

      flechaX += 7;

      image(flecha, flechaX, flechaY);
      
      if (impactoflecha()) {
      moverFlecha = false;
      estado = "IMPACTO";
    }
    }
  }
}

function titulo() {
  if (estado == "CAIDA") {



    if (gameOverY < 200) {
      gameOverY += 4;
    }

    image(gameOver, 250, gameOverY, 300, 300);
  }
}
