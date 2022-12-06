const pokeList = document.querySelector('#pokeList');
const loadMoreBtn = document.getElementById('btnLoadMore');
const maxRecords = 151;
const limit = 8;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then(pokemons => {
    const newHTML = pokemons.map(pokemon => `
      <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="details">
          <ol class="types">
            ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>

          <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
      </li>
    `).join('')
    pokeList.innerHTML = newHTML
  })
}

loadPokemonItens(offset, limit)

loadMoreBtn.addEventListener('click', () => {
  offset += limit
  const qtdRecordNextPage = offset + limit

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreBtn.parentElement.removeChild(loadMoreBtn);
  } else {
    loadPokemonItens(offset, limit)
  }
})
