const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text){
    for(let i = 0; i< array.length; i++){
        if(array[i] == text){
            return i;
        }

        return -1;
    }
}

console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Yoda"));

function removeItem(array, text){
    const index = findArrayIndex(array, text);

    if(index !== -1){
        array.splice(index, 1);
    }
    return array;
}

let characters1 = [...mainCharacters];
console.log(removeItem(characters1, "Leia"));

let characters2 = [...mainCharacters];
console.log(removeItem(characters2, "Anakin"));

let characters3 = [...mainCharacters];
console.log(removeItem(characters3, "Yoda"));