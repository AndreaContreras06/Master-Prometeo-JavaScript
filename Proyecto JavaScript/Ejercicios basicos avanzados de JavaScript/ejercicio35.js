const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    const foundMutants = mutants.filter(
        mutant => mutant.power.toLowerCase() === power.toLowerCase()
    );

    if(foundMutants.length > 0){
        const names = foundMutants.map(m => m.name).join(', ');
        return `Se encontraron ${foundMutants.length} mutante(s) con el poder "${power}": ${names}`;
    }else {
        return `No se encontró ningún mutante con el poder "${power}"`;
    }
  
}


