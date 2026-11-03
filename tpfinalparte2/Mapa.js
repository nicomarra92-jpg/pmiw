class Mapa {
  constructor(matrizEntrada) {
    this.tCelda = 50; // 50px * 16 col = 800 | 50px * 9 filas = 450
    this.grid = matrizEntrada;
    
    // El .length nativo funciona al 100% sin dar undefined
    this.filas = this.grid.length;       // Da 9
    this.columnas = this.grid[0].length; // Da 16
  }

  mostrar() {
    for (let f = 0; f < this.filas; f++) {
      for (let c = 0; c < this.columnas; c++) {
        // Si hay un 1, dibujamos un bloque de pared
        if (this.grid[f][c] === 1) {
          fill(40); // Gris oscuro
          noStroke();
          rect(c * this.tCelda, f * this.tCelda, this.tCelda, this.tCelda);
        }
      }
    }
  }

  // Esta función queda lista para cuando configures tu personaje
  esCaminoLibre(columna, fila) {
    if (fila < 0 || fila >= this.filas || columna < 0 || columna >= this.columnas) {
      return false; // Si se sale del mapa, es pared
    }
    return this.grid[fila][columna] === 0; // True si es camino, False si es pared
  }
}
