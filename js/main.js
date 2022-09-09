var pokemonList = document.querySelector('.pokemon-list');

function createPokemon(pokemon) {
    let colEl = document.createElement('div');
    colEl.className = 'col-6 col-lg-3 col-md-6 col-sm-6 ';

    let cardEl = document.createElement('div');
    cardEl.className = 'card'; 

    let cardImg = document.createElement('img');
    cardImg.setAttribute('src', pokemon.img);
    cardImg.className = 'px-5 pt-3';

    let cardHeader = document.createElement('div')
    cardHeader.className = 'h3 text-center pt-1';

    let cardBody = document.createElement('div')
    cardBody.className = 'card-body ';

    let cardTitle = document.createElement('h5');
    cardTitle.textContent = pokemon.name;

    let cardDescription = document.createElement('h5');
    cardDescription.className = 'description';
    cardDescription.textContent = pokemon.type;

    let numbers = document.createElement('div')
    numbers.className = 'my-3 d-flex justify-content-between';

    let weight = document.createElement('div');
    weight.textContent = pokemon.weight;

    let avg_spawns = document.createElement('div');
    avg_spawns.textContent = pokemon.avg_spawns + "  avg spawns";

    cardEl.appendChild(cardImg);
    cardEl.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardDescription.appendChild(numbers);
    numbers.appendChild(weight);
    numbers.appendChild(avg_spawns);
    colEl.appendChild(cardEl);

    return colEl
}

render(pokemons)

function render(pokemon) {
    pokemonList.innerHTML = null;
    for (let i = 0; i < pokemon.length; i++) {
        let singleEl = createPokemon(pokemon[i]);
        pokemonList.appendChild(singleEl);
    }
}





//Filter
function filterBtn() {
    let minWeight = document.querySelector('#min_weight').value - 0;
    let maxWeight = document.querySelector('#max_weight').value - 0;
    let search = document.querySelector('#search').value;
    if (minWeight > 0 && maxWeight > 0) pokemonList.innerHTML = null;
    for (let i = 0; i < pokemons.length; i++) {
        let value = pokemons[i].weight.split(' ');
        if (value[0] > minWeight && value[0] < maxWeight) {
            let singleEl = createPokemon(pokemons[i]);
            pokemonList.appendChild(singleEl);
        }
        if (search.toLowerCase() == pokemons[i].name.toLowerCase()) {
            pokemonList.innerHTML = null;
            let singleEl = createPokemon(pokemons[i]);
            pokemonList.appendChild(singleEl);
            break;
        }
    }




}
