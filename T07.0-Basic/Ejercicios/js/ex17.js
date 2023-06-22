// Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos los números pares desde 2 hasta ese número utilizando un bucle `while`.

let numero = prompt("Ej. 17: Ingresar un numero");

let i = 2;
while(numero >= i){
    console.log(i);
    i += 2;
}