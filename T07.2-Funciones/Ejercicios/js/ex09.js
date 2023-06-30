// 9/12

// Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9.
// Al final muestra por consola el valor de cada posición y la suma de todos los valores.
// Tareas a realizar: Haz un método para rellenar el array(que tenga como parámetros los números entre los que tenga que generar) y otro para mostrar el contenido y la suma del array.

alert("Ejercicio 9/12: Lista rellena con nums aleatorios entre 0-9");



// VARIABLES
    let tamañoArray = parseInt(prompt("Por favor indique el tamaño del array."));
    let lista = new Array(tamañoArray);


// FUNCIONES
const numAleatorio = (minValor, maxValor) => {
    for (let i = 0; i < lista.length; i++) {
        lista[i] = Math.floor(Math.random()*(maxValor-minValor+1)+minValor);
    }
};

const leerLista = () => {
    let sumaTotal = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaTotal += lista[i];
        console.log(`Posición: ${i} - valor: ${lista[i]}`);
    }

    console.log("Suma total: " + sumaTotal);
};


// PROGRAMA
numAleatorio(0,9);
leerLista();
