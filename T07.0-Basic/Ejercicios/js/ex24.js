// Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la suma de todos los dígitos del número utilizando un bucle `while`.

alert("Ejercicio 24: Sumar todos los digitos de un numero");

let numero = prompt("Por favor ingrese un numero");

let i = 0;
let resultado = 0;
while (i < numero.length) {
    resultado += +numero.charAt(i);
    i++;
};

console.log(resultado);
