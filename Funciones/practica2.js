import { obtenerPalabras, mostrarResultado } from './main.js';

const contarFrecuenciaPalabras = (palabras) => {
  const mapaFrecuencias = new Map();
  palabras.forEach((palabra) => {
    mapaFrecuencias.set(palabra, (mapaFrecuencias.get(palabra) || 0) + 1);
  });
  return mapaFrecuencias;
};

const palabras = obtenerPalabras();
const resultado = contarFrecuenciaPalabras(palabras);
mostrarResultado(resultado);
