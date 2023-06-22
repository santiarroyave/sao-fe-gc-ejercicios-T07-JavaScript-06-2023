// Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor de ellos.
alert("Ej. 8: Saber que numero es mayor");

let num1 = +prompt("Ingrese un número");
let num2 = +prompt("Ingrese otro número");
let num3 = +prompt("Ingrese el último número");

if(num1>num2 && num1>num3){
    alert(`El número ${num1} es mayor que los otros dos. (${num2}, ${num3})`);
}else if(num2>num3){
    alert(`El número ${num2} es mayor que los otros dos. (${num1}, ${num3})`);
}else{
    alert(`El número ${num3} es mayor que los otros dos. (${num1}, ${num2})`);
}


