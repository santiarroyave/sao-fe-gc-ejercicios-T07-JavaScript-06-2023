// 4/12

// Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo realizará mediante un método al que le pasamos el número como parámetro.
// Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno.
// Por ejemplo, si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

alert("Ejercicio 4/12: Calcular factorial");

// VARIABLES
let numero = prompt("Por favor ingrese un numero");

// FUNCIONES
const factorial = (valor) => {
    let total = 1;

    for (let i = 1; i <= valor; i++) {
        total = i*total;
    }
    console.log(`El factorial es ${total}`);
    return total;
};

// PROGRAMA
alert(factorial(numero));

