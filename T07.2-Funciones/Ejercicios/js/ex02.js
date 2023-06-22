// 2/12

// Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados por el usuario (prompt).
// Crea un método donde pasamos como parámetros entre qué números queremos que los genere, podemos pedirlas al usuario antes de generar los números. Este método devolverá un número entero aleatorio.
// Muestra estos números por consola.

alert("Ejercicio 2/12: Numeros aleatorios");

// VARIABLES
let cantidad = prompt("¿Cuántos numeros aleatorios deseas?");
let minimo = prompt("Indica el rango minimo");
let maximo = prompt("Indica el rango maximo");


// FUNCIONES
const calcularAleatorios = (min,max,cant) => {
    // Formula: Math.random()*(max-min+min);

    // console.log("Minimo: " + min);
    // console.log("Maximo: " + max);
    // console.log("Cantidad: " + cant);

    let listaNumeros = [];

    for (let i = 0; i < cant; i++) {
        listaNumeros[i] = Math.floor(Math.random()*(max-min)+min);
    }

    console.log(listaNumeros);
    return listaNumeros;
};

// PROGRAMA
alert(calcularAleatorios(minimo,maximo,cantidad));



// A REVISAR!!!! : LA FORMULA NO FUNCIONA BIEN, NO COGE BIEN LOS RANGOS