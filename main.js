const pokeInput = document.getElementById('pokeInput');
const pokeBtn = document.getElementById('pokeBtn');

async function fetchPokemon(pokeName) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    try {
        const res = await fetch(apiUrl)
        const data = await res.json()
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
        <h5>${pokemon.name}</h5>
        <img src = "${pokemon.sprites.front_default}">
        <p>${pokemon.abilities.map(ability => ability.ability.name).join(',')}</p>
    `;
    container.appendChild(pokeCard)
};

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
});
