// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la multiplicación de todos los números enteros positivos menores o iguales a ese número utilizando un bucle `do...while`

let numero = prompt("Ej.21: Ingrese un numero");

let i = 1;
let multiplicacion = 1;

do {
    multiplicacion *= i;
    i++;
} while (i <= numero);


console.log(multiplicacion);
alert(multiplicacion);