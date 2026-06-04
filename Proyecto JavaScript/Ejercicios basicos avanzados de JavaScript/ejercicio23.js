const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const pequeña = [];
const mediana = [];
const grande = [];

for (let i=0; i<movies.length; i++){
    const movie =movies[i];

    if(movie.durationInMinutes <100){
        pequeña.push(movie);
    }else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200){
        mediana.push(movie);
    }else if (movie.durationInMinutes > 200){
        grande.push(movie);
    }
}

console.log("Peliculas pequeñas: ", pequeña);
console.log("Peliculas medianas: ", mediana);
console.log("Peliculas grandes: ", grande);