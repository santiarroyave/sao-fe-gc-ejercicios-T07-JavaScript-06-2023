// 5/12

// Crea una aplicación que nos convierta un número en base decimal a binario.
// Esto lo realizará un método al que le pasaremos el número como parámetro, devolverá un String con el número convertido a binario.
// Para convertir un número decimal a binario, debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división formará el número binario, de abajo a arriba.

alert("Ejercicio 5/12: De decimal a Binario");

// VARIABLES
let numeroDecimal = prompt("Por favor indique que numero quiere convertir a decimal.");

// FUNCIONES
const numeroBinario = (valor) => {
    let binario = [];

    while (valor > 0) {
        binario = (valor % 2) + binario;
        valor = Math.floor(valor / 2);
    }

    console.log("El numero binario es: " + binario);
    return binario;
};

// PROGRAMA
alert(numeroBinario(numeroDecimal));
