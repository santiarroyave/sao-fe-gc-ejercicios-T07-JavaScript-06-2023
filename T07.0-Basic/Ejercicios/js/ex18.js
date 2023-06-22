// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.

let numero = +prompt("Ej.18 Ingrese numero");

let i = 1;
let x = 0;
do {
    x = x+i;
    console.log(x);
    i++;
} while (numero >= i);