// Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada palabra de la frase en una línea diferente utilizando un bucle `for...of`.

alert("Ejercicio 25: Mostrar en consola todas las palabras de una frase");

let frase = prompt("Por favor ingrese una frase");

// Esto crea un array de palabras separadas por el espacio " "
let palabras = frase.split(" ");

for (const palabra of palabras) {
    console.log(palabra);
}