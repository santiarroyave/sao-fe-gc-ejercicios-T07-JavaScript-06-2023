// Crea un programa que solicite al usuario ingresar un número y determine si es divisible entre 3.

let numero = prompt("Ej. 11: Por favor ingrese un número");

let resto = numero%3;

if(resto == 0){
    alert(`El número ${numero} es divisible entre 3`);
}else{
    alert(`El valor ${numero} NO es divisible entre 3`);
    
}