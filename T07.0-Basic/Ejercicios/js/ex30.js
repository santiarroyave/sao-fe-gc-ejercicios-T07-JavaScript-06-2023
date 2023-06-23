// Crea un programa que solicite al usuario ingresar un número y luego determine si es un número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle `while`, una condición `if` y una variable acumuladora.

alert("Ejercicio 30: Saber si un numero es perfecto");

let numero = prompt("Por favor ingrese un numero");
let divisor = 1;
let sumaDivisores = null;

while (divisor < numero) {
    if(numero%divisor == 0){
        sumaDivisores += divisor;
    }
    divisor++;
}

// console.log("Suma de los divisores: "+sumaDivisores);
// console.log("Numero original: "+numero);
if(sumaDivisores == numero){
    console.log("Es perfecto");
    alert("Es perfecto");
}else{
    console.log("No es perfecto");
    alert("No es perfecto");
}