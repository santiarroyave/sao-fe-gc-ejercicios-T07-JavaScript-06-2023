// Realiza un programa que solicite al usuario ingresar un número y determine si es par o impar.

alert("Ejercicio 6");
let numero = prompt("Ingresa un numero para saber si es par o impar.");


if(numero%2 == 0){
    alert("El número " + numero + " es par.");
}else if(numero%2 !== 0){
    alert("El número " + numero + " es impar.");
}else{
    alert("El dato introducido no es un numero.");
}

// Dudas: Por qué el texto lo cuenta como impar?