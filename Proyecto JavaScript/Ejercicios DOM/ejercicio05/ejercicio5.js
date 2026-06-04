const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.getElementById('albumList');

albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album;
  ul.appendChild(li);
});