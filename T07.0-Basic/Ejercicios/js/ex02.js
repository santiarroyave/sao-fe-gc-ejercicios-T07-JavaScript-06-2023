/*
Declarar una variable llamada "radio" y asignarle un valor numérico que represente el radio de un círculo.
Calcular el área del círculo (usando la fórmula π * radio^2) y mostrar el resultado en la consola.
*/

// let radio = prompt("¿Cuál es el radio del riculo?");
let radio = 12;
let pi = Math.PI;

let area = pi * radio**2;

let texto = "El área de un círculo con radio de " + radio + " cm es de: "

alert(texto + area + " cm^2");