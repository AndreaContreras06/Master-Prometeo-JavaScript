const image = document.querySelector('.random-image');

// Número aleatorio entre 1 y 151
const randomId = Math.floor(Math.random() * 151) + 1;

const getPokemon = async () => {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );

        const pokemon = await response.json();

        image.src = pokemon.sprites.other['official-artwork'].front_default;
        image.alt = pokemon.name;

    } catch (error) {
        console.error(error);
    }
};

getPokemon();