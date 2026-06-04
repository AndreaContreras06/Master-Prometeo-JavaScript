const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  const uniqueArray = [];

  for (let i = 0; i < list.length; i++) {
    if (!uniqueArray.includes(list[i])) {
      uniqueArray.push(list[i]);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates(duplicates));