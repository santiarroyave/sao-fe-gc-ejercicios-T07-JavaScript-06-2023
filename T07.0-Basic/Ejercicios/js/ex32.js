// Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora.

alert("Ejercicio 32: Calcular factorial");

let numero = prompt("Por favor ingrese un numero");
let acumulador = 1;


if(numero > 0){
    for (let i = 1; i <= numero; i++) {
        acumulador *= i;
        // console.log(acumulador);
    }
}

alert(acumulador);