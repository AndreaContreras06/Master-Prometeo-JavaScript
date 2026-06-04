const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
    if(
        index1 < 0 || index1 >= array.length ||
        index2 < 0 || index1 >= array.length
    ) {
        throw new Error("Indices fuera de rango");
    }

    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp; 

    return array;
}

console.log(swap(fantasticFour, 0, 3));