function previous() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (Number(pokemonId)-1 <= 1) ? 1 : Number(pokemonId)-1;
    getPokemon(pokemonId)
}

function next() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (Number(pokemonId)+1 >= 898) ? 898 : Number(pokemonId)+1;
    getPokemon(pokemonId)
}

function pokemonKeyId() {
    let pokemonId = document.pokemonKeySend.pokemonId.value
    pokemonId = (pokemonId <= 1) ? 1 : pokemonId;
    pokemonId = (pokemonId >= 898) ? 898 : pokemonId;
    getPokemon(pokemonId)
}

function getPokemon(id = 1) {
    let pokemonApi = "https://pokeapi.co/api/v2/pokemon/" + id;
    let pokemonReq = new XMLHttpRequest();
    pokemonReq.open("GET", pokemonApi, false);
    pokemonReq.send();

    let pokemonData = JSON.parse(pokemonReq.responseText);

    document.getElementById("pokemon-id").value = pokemonData.id;
    document.getElementById("name-display").innerHTML = pokemonData.name;
    document.getElementById("img-pokemon").src = pokemonData.sprites.front_default;
}