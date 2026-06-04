// 1.1 Crear lista de países dinámicamente
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');

countries1.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);

// 1.2 Eliminar elemento con clase .fn-remove-me
const removeP = document.querySelector('.fn-remove-me');
removeP.remove(); // elimina directamente del DOM :contentReference[oaicite:0]{index=0}


// 1.3 Crear lista dentro del div[data-function="printHere"]
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrint = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});

divPrint.appendChild(ulCars);

// 1.4 Crear divs con h4 + img
const countries2 = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement('div');
document.body.appendChild(container);

countries2.forEach(item => {
  const div = document.createElement('div');

  const h4 = document.createElement('h4');
  h4.textContent = item.title;

  const img = document.createElement('img');
  img.src = item.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  container.appendChild(div);
});

// 1.5 Botón para eliminar el último div
const btnRemoveLast = document.createElement('button');
btnRemoveLast.textContent = 'Eliminar último';

btnRemoveLast.addEventListener('click', () => {
  if (container.lastElementChild) {
    container.lastElementChild.remove();
  }
});

document.body.appendChild(btnRemoveLast);


// 1.6 Botón para eliminar cada div individualmente
const updateDivsWithButtons = () => {
  const divs = container.querySelectorAll('div');

  divs.forEach(div => {
    // evitar duplicar botones
    if (!div.querySelector('button')) {
      const btn = document.createElement('button');
      btn.textContent = 'Eliminar este';

      btn.addEventListener('click', () => {
        div.remove();
      });

      div.appendChild(btn);
    }
  });
};

// Llamamos una vez para añadir botones
updateDivsWithButtons();