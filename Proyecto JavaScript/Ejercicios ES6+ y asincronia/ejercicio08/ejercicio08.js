const select = document.querySelector('#character-list');
const image = document.querySelector('.character-image');

let characters = [];

fetch('https://thronesapi.com/api/v2/Characters')
    .then((response) => response.json())
    .then((data) => {
        characters = data;

        data.forEach((character) => {
            const option = document.createElement('option');

            option.value = character.id;
            option.textContent = character.fullName;

            select.appendChild(option);
        });
    })
    .catch((error) => console.error(error));

select.addEventListener('change', (event) => {
    const selectedCharacter = characters.find(
        (character) => character.id === Number(event.target.value)
    );

    if (selectedCharacter) {
        image.src = selectedCharacter.imageUrl;
        image.alt = selectedCharacter.fullName;
    }
});