// 8/12

// Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar valores y otro para mostrar.

alert("Ejercicio 8/12: ");

// VARIABLES
let lista = new Array(10);

// FUNCIONES
const rellenarValores = () => {
    let numero = null;

    for (let i = 1; i <= 10; i++) {
        numero = prompt(`Por favor ingrese un numero [${i}/10]`);
        console.log(`Índice: ${i}`);
        lista[i-1] = (parseInt(numero));
    }
    return numero;
};

const mostrarValores = (newLista) => {
    console.log("Lista de valores:");
    console.log(newLista);
};


// PROGRAMA
rellenarValores();
mostrarValores(lista);
