
async function fetchPokemon(pokeName) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        console.log(data)
        return (data)
    }catch(err) {
        console.log(err)
    }
};

function showPokemon(pokemon) {
    const container = document.querySelector('#pokeDisplay')
    const pokeCard = document.createElement('div')
    pokeCard.className = 'card-info'
    
    pokeCard.innerHTML = `
        <img class = 'pokemon-display' src = "${pokemon.sprites.front_default}">
        <h2>${pokemon.name}</h2>
        <p class='fs-3'>Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(',')}</p>
        <p class='fs-3'>Stats: ${pokemon.stats.map(stats => stats.stat.name).join(',')}</p>
        <p class='fs-3'>Types: ${pokemon.types.map(types => types.type.name).join(',')}</p>
    `;
    container.appendChild(pokeCard)
    console.log(container)
};
document.addEventListener('DOMContentLoaded', (event) => {
    const pokeInput = document.getElementById('pokeInput');
    const pokeBtn = document.getElementById('pokeBtn');
    pokeBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        const name = pokeInput.value
        if (name) {
            const pokemon = await fetchPokemon(name);
            if (pokemon) {
                showPokemon(pokemon);
            }else {
                alert("Could not fetch that Pokemon")
            }
        }else {
            alert("Not a valid pokemon. Try again")
        }
})
});