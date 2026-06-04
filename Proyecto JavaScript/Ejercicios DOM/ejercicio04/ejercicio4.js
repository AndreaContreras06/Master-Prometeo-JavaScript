// 1.1 Evento click en el botón
const btn = document.getElementById('btnToClick');

btn.addEventListener('click', (event) => {
  console.log(event); // muestra toda la info del evento
});


// 1.2 Evento focus en input
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', (event) => {
  console.log(event.target.value); // valor del input
});


// 1.3 Evento input (cada vez que escribes)
const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', (event) => {
  console.log(event.target.value); // valor actualizado en tiempo real
});