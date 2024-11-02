const obtenerPalabras = () => {
  const palabras = [];
  let palabra;
  while (true) {
    palabra = prompt(
      'Introduce una palabra (deja en blanco o presiona cancelar para terminar):'
    );
    if (palabra === null || palabra.trim() === '') break;
    palabras.push(palabra.trim().toLowerCase());
  }
  return palabras;
};

const mostrarResultado = (resultado) => {
  console.log('Resultado:', resultado);
};
