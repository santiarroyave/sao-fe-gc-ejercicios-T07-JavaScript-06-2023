// 2/12

// Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados por el usuario (prompt).
// Crea un método donde pasamos como parámetros entre qué números queremos que los genere, podemos pedirlas al usuario antes de generar los números. Este método devolverá un número entero aleatorio.
// Muestra estos números por consola.

alert("Ejercicio 2/12: Numeros aleatorios");

// VARIABLES
let cantidad = parseInt(prompt("¿Cuántos numeros aleatorios deseas?"));
let minimo = parseInt(prompt("Indica el rango minimo"));
let maximo = parseInt(prompt("Indica el rango maximo"));


// FUNCIONES
const calcularAleatorios = (min,max,cant) => {
    // Formula: Math.random()*(max-min+min);

    // console.log("Minimo: " + min);
    // console.log("Maximo: " + max);
    // console.log("Cantidad: " + cant);

    let listaNumeros = [];

    for (let i = 0; i < cant; i++) {
        listaNumeros[i] = Math.floor(Math.random()*(max-min+1)+min);
    }

    console.log(listaNumeros);
    return listaNumeros;
};

// PROGRAMA
alert(calcularAleatorios(minimo,maximo,cantidad));