// Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola cada letra de la palabra en una línea diferente utilizando un bucle `for`.

let palabra = prompt("Ej. 22: Por favor escriba una palabra");
console.log(palabra);

let letra = null;

for (let i = 0; i < palabra.length; i++) {
    console.log(palabra.charAt(i));
    
}