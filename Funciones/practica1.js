import { obtenerPalabras, mostrarResultado } from './main.js';

const procesarPalabrasPractica1 = (palabras) => {
  const palabrasUnicas = [...new Set(palabras)];
  palabrasUnicas.sort((a, b) => b.localeCompare(a, 'es'));
};

const palabras = obtenerPalabras();
const resultado = procesarPalabrasPractica1(palabras);
mostrarResultado(resultado);
