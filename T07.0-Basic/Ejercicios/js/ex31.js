// Realiza un programa que solicite al usuario ingresar un número y luego muestre en la consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una condición `if` y una función auxiliar para verificar si un número es primo.

alert("Ejercicio 31: Mostrar numeros primos entre 1 y X");

// VARIABLES
let numero = prompt("Por favor ingrese un numero");

// FUNCIONES
const esPrimo = (num) => {
    let divisibles = [];

    if(num == 0 || num == 1 ){
    }else{
        for (let i = 2; i < num; i++) {
            if(num%i == 0){
                divisibles.push(i);
            }
        }
    }
    
    if(divisibles.length == 0){
        //primo
        return true;
    }else{
        //no primo
        return false;
    }
};

// PROGRAMA
for (let i = 1; i <= numero; i++) {

    if(esPrimo(i) == true){
        console.log(i);
    }
}