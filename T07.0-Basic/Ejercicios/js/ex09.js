// Escribe un programa que solicite al usuario ingresar un número y determine si es positivo, negativo o cero.

let numero = prompt("Ej. 9: Ingresar un numero");


if(numero == 0){
    alert("El número es igual a 0");
}

if(numero > 0){
    alert(`El número ${numero} es positivo`);
}

if(numero < 0){
    alert(`El número ${numero} es negativo`);

}