// Realiza un programa que solicite al usuario ingresar un número y luego muestre en la consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un contador de divisores.

alert("Ejercicio 28: Mostrar si un numero es primo");

let numero = prompt("Por favor ingrese un numero");
let divisibles = [];


if(numero == 0 || numero == 1 ){
    console.log("El numero es un: " + numero);
}else{
    for (let i = 2; i < numero; i++) {
        if(numero%i == 0){
            console.log("Puede dividirse entre: " + i);
            divisibles.push(i);
        }
    }
}

console.log(divisibles);
console.log("Contador de divisores: " + divisibles.length);

if(divisibles.length == 0){
    console.log("primo");
    alert("Es primo");
}else{
    console.log("no es primo"); 
    alert("No es primo");
}