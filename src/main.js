import datos from "./data/pokemon/pokemon.js";
import { filtrarTarjetas, ordenarPokemon, mejoresPokemon } from "./data.js";
const arregloPokemon = datos.pokemon;

const vistaPokemon = document.getElementById("vistaPokemon");

// function mostrarTarjetas(arregloPokemon) {
//   vistaPokemon.innerHTML = ''
//   for (let i = 0; i < arregloPokemon.length; i++) {
//     vistaPokemon.innerHTML += `<article>
//     <h1>${arregloPokemon[i].name}</h1> 
//     <h2 id= "tiposLetra">Type:</h2>        
//     <h3>${arregloPokemon[i].type}<h3/>
//     <img src="${arregloPokemon[i].img}" alt="">
//     <h4>Stats</h4>
//     <h5>
//     <p>base-attack:  ${arregloPokemon[i].stats["base-attack"]}</p>
//     <p> base-defense: ${arregloPokemon[i].stats["base-defense"]}</p> 
//     <p>base-stamina: ${arregloPokemon[i].stats["base-stamina"]}</p>
//     </h5>
//     <h6>${arregloPokemon[i].num}</h6>
//   </article>`;
//   }
// }

//Muestra de tarjetas con caracteristicas especificadas en interfaz
const mostrarTarjetas = (arregloPokemon) => {
  vistaPokemon.innerHTML = ''
  for (const pokemon of arregloPokemon) {
    const pokemonDiv = document.createElement("article");
    pokemonDiv.classList.add("card");
    pokemonDiv.innerHTML += `
    <article class="card">
      <img src="${pokemon.img}" alt="imagen del Pokémon">
      <h2>${pokemon.name}</h2>
      </article>
      `;
    vistaPokemon.appendChild(pokemonDiv);

    pokemonDiv.addEventListener("click", () => {
      mostrarDetallePokemon(pokemon);
    });
  }
};

//Función encargada de abrir un dialogo(modal) con la información de cada pokemon
const mostrarDetallePokemon = (pokemon) => {
  const modal = document.createElement("dialog");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div id="info-pokemon">
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.img}" alt="Imagen del Pokémon">
    <h3 class="tipo">Type: ${pokemon.type}</h3>
    <p>${pokemon.about}</p>
    <div class="columna">
    <div class="ladoA">
    <h3>Stats:</h3>
    <p>Base Attack: ${pokemon.stats["base-attack"]}</p>
    <p>Base Defense: ${pokemon.stats["base-defense"]}</p>
    <p>Base Stamina: ${pokemon.stats["base-stamina"]}</p>
    <p>Max CP: ${pokemon.stats["max-cp"]}</p>
    <p>Max HP: ${pokemon.stats["max-hp"]}</p>
    </div>
    <div class="ladoB">
    <h4>Resistant:</h4>
      <p>${pokemon.resistant}</p>
      <h4>Weaknesses:</h4>
      <p>${pokemon.weaknesses}</p>
    </div>
    </div>
    <h5>${pokemon.num}</h5>
        </div>
    <form method="dialog">
      <button class="close">Close</button>
    </form>`;
  vistaPokemon.appendChild(modal);

  const closeModal = modal.querySelector(".close");
  closeModal.addEventListener("click", () => {
    modal.remove();
  });

  modal.showModal();
};

//Muestra el filtro por tipo de pokemon
const seleccionTipo = document.getElementById("tipos");

seleccionTipo.addEventListener('change', function () {
  const tipoPokemon = seleccionTipo.value
  const pokemonsFiltrados = filtrarTarjetas(arregloPokemon, tipoPokemon);
  mostrarTarjetas(pokemonsFiltrados)
});

//Mostrar los pokemon ordenados alfabéticamente
const seleccionOrdenar = document.getElementById("ordenarAlfabeticamente");
seleccionOrdenar.addEventListener('change', function () {
  const ordenPokemon = seleccionOrdenar.value
  const pokemonsOrdenados = ordenarPokemon(arregloPokemon, ordenPokemon);
  mostrarTarjetas(pokemonsOrdenados)
});

//Mostrar los pokemones con el cálculo establecido en data.js
const topPokemon = document.getElementById("top");
topPokemon.addEventListener('click', function () {
  const bestPokemon = topPokemon.value
  const pokemonsTop = mejoresPokemon(arregloPokemon, bestPokemon);
  mostrarTarjetas(pokemonsTop)
})

//Funcionalidad buscador de pókemon
const inputBuscarPokemon = document.getElementById("buscarPokemon");
inputBuscarPokemon.addEventListener('input', function() {
  const searchTerm = inputBuscarPokemon.value.toLowerCase().trim();
  const pokemonesFiltrados = arregloPokemon.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchTerm);
  });
    mostrarTarjetas(pokemonesFiltrados);
  });

mostrarTarjetas(arregloPokemon);