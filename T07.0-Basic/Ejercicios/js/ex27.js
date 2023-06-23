// Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una condición `if`.

alert("Ejercicio 27: Calcular suma de los numeros impares desde 1 hasta X.");

let numero = prompt("Por favor ingrese un numero");

let i = 0
let suma = 0;
while (i <= numero) {
    if(i%2 != 0){
        // console.log(i);
        suma += i;
    };
    i++;
}
console.log("Total: " + suma);