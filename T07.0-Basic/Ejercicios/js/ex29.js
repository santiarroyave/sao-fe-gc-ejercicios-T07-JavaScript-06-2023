// Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una condición `if` y una variable contador.

alert("Ejercicio 29: Contar vocales de palabra");

let palabra = prompt("Por favor ingrese una palabra");
let contador = 0;
let letra = null;

for (let i = 0; i < palabra.length; i++) {
    letra = palabra.charAt(i);
    if (
        letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || letra == "á" || letra == "é" || letra == "í" || letra == "ó" || letra == "ú"){
        console.log(letra);
        contador++;
    } 
}

console.log("Vocales: " + contador);
alert("Vocales: " + contador);