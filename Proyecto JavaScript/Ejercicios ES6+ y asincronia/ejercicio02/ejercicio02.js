/*2.1*/
const pointsList = [32, 54, 21, 64, 75, 43];

const copyPointsList = [...pointsList];

console.log(copyPointsList);


/*2.2*/
const toy = {
  name: 'Bus laiyiar',
  date: '20-30-1995',
  color: 'multicolor'
};

const copyToy = { ...toy };

console.log(copyToy);


/*2.3*/
const pointsLis2 = [54, 87, 99, 65, 32];

const newPointsList = [...pointsList, ...pointsLis2];

console.log(newPointsList);


/*2.4*/
const toyUpdate = {
  lights: 'rgb',
  power: ['Volar like a dragon', 'MoonWalk']
};

const updatedToy = { ...toy, ...toyUpdate };

console.log(updatedToy);


/*2.5*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

/*Eliminamos la posición 2 ("amarillo")*/
const newColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(newColors);
console.log(colors); 