//Realizamos la función filtrar segun "type"
export function filtrarTarjetas(arregloPokemon, type) {
  if (type === "") {
    return false;
  }
  const result = arregloPokemon.filter((element) =>
    element.type.includes(type)
  );

  return result;
}

//Ordenando alfabéticamente en forma ascendente y descendente
export function ordenarPokemon(arregloPokemon, name) {
  const arraySort = arregloPokemon.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  if (name === "") {
    return false;
  } else if (name === "ordenar") {
    return arraySort;
  } else {
    return arraySort.reverse();
  }
}

//Función con cálculo para seleccionar a los 20 mejores pokemones
export function mejoresPokemon(arregloPokemon) {
  const topPokemon = arregloPokemon.filter((element) => {

    const suma =
      Number(element.stats["base-attack"]) +
      Number(element.stats["base-defense"]) +
      Number(element.stats["base-stamina"]) +
      Number(element.stats["max-cp"]) +
      Number(element.stats["max-hp"]);
    const promedio = suma / 5;
    // if (promedio >= 840) {
      if (promedio >= 765) {
      return true
    }
    else {
      return false
    }
  })
  return topPokemon
}