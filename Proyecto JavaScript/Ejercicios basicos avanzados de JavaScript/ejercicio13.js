const names =[
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc',
];

function nameFinder(nameList, name){
    const index = nameList.indexOf(name);

    if(index !== -1){
        return {
            exists: true,
            position: index
        };
    }else {
        return false;
    }
}

console.log(nameFinder(names, 'Tony'));