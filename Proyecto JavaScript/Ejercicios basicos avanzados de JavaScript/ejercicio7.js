function greaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else if (numberTwo > numberOne) {
        return numberTwo;
    } else {
        return "Ambos números son iguales";
    }
}

const resultado = greaterNumber(100, 50);
console.log(resultado);