// 1/15
// Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
// Crea una función que saque por consola la longitud del array.
// Crea otra función que obtenga un elemento aleatorio del array y lo saque por consola.

let listaLetras = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];


const longitudArray = (new1) => {
    tamanoArray = new1.length;
    console.log("El tamaño del array es: " + tamanoArray);

    return tamanoArray;
};

const elementoAleatorio = (new1) => {

    tamanoArray = longitudArray(new1);
    aleatorio = Math.floor(Math.random()*tamanoArray);

    letraAleatorioa = new1[aleatorio];

    console.log(`La letra aleatoria es: ${letraAleatorioa}`);
    return aleatorio;
};


longitudArray(listaLetras);

elementoAleatorio(listaLetras);