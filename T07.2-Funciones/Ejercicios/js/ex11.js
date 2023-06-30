// 11/12

// Crea dos arrays de números con la dimensión pasada por teclado.
// Uno de ellos estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores del segundo array con valores aleatorios. Después, crea un método que tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de cada array.

alert("Ejercicio 11/12: Multiplicar listas");

// VARIABLES
let array = 0;
tamañoArray = parseInt(prompt("Por favor indique el tamaño de los arrays."));
let lista1 = new Array(tamañoArray);
let lista2 = new Array(tamañoArray);
let listaNueva = new Array(tamañoArray);

// Rango de los numeros aleatorios
let min = 0;
let max = 100;


// FUNCIONES
const numAleatorio = (minValor, maxValor) => {
    return Math.floor(Math.random()*(maxValor-minValor+1)+minValor)
};

const fusionListas = (newLista1, newLista2) => {
    let listaX = new Array;

    for (let i = 0; i < newLista1.length; i++) {
        listaX[i] = newLista1[i]*newLista2[i];
    }

    return listaX;
};


// PROGRAMA
// Rellenamos el primer array
for (let i = 0; i < lista1.length; i++) {
    lista1[i] = numAleatorio(min,max);
}

// Apuntamos al array anterior
lista2 = lista1;

// Reasignamos el segundo array con numeros aleatorios
for (let i = 0; i < lista2.length; i++) {
    lista2[i] = numAleatorio(min,max);
}

listaNueva = fusionListas(lista1, lista2);

console.log(`Lista 1: ${lista1}`);
console.log(`Lista 2: ${lista2}`);
console.log(`Lista 2: ${listaNueva}`);
