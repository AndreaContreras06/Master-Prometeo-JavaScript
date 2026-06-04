// 1.1 Botón con clase .showme

const boton = document. querySelector('.showme');
console.log(boton);

// 1.2 h1 con id #pellido

const h1 = document.querySelector('#pillido');
console.log(h1);

//1.3 Todos los <p>

const parrafos = document.querySelectorAll('p');
console.log(parrafos);

// 1.4 Todos los elementos con clase .pokemon
const pokemons = document.querySelectorAll('.pokemon');
console.log(pokemons);

// 1.5 Todos los elementos con atributo data-function="testMe"
const elementos = document.querySelectorAll('[data-function="testMe"]');
console.log(elementos);

// 1.6 El 3er personaje con data-function="testMe"
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(tercerPersonaje);