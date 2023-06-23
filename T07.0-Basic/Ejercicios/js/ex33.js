// Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable acumuladora.

alert("Ejercicio 33: Mostrar palabra invertida");

let palabra = prompt("Por favor ingrese una palabra");
let palabraInvertida = "";


if(palabra.length > 0){
    let i = palabra.length - 1;
    while (i >= 0) {
        palabraInvertida += palabra.charAt(i);
        i--; 
    }

    console.log(palabraInvertida);
    alert(palabraInvertida);
}
