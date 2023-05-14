export const getRandomNumber = (min, max) => {
  // Obten las distancia entre los dos numeros
  const amplitud = Math.abs(max - min);

  // Generamos un numero aleatorio entre 0 y esa distancias
  const randomAmplitud = Math.round(Math.random() * amplitud);

  //  La distancia aleatoria se suma al aminimo
  // Donde en el caso de extremo de cero, nos quedammos  en el numero minimo
  // Y en el caso de extremo donde se obtine la distancia completa nos quedamos con el maximo
  return randomAmplitud;
};
