// 6/12

// Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que controlarlo) pedido por prompt.
// Crea un método que realice esta acción, pasando el número por parámetro devolverá el número de cifras.

alert("Ejercicio 6/12: Contar numero de cifras");

// VARIABLES
let numero = prompt("Por favor indique un numero entero positivo para contar las cifras que tiene");

// FUNCIONES

const contarCifras = (valor) => {
    cifras = valor.toString().length;

    console.log("Cifras: " + cifras);
    return cifras;
};

const controlar = (valor) => {
    // Es un numero?
    console.log(valor.isNumeric);

    // Es entero?
    
    // Es positivo?


};
const esNumero = (valor) => {};
const esEntero = (valor) => {};
const esPositivo = (valor) => {};


// PROGRAMA

// alert(controlar(numero));
console.log("hola")
console.log(numero.isNumeric);

// esNumero(); // true/false
// esEntero(); // true/false
// esPositivo(); // true/false

// if(controlar(numero) != false){
//     alert(contarCifras(numero));
    
// }else{
//     alert("No has introducido un valor correcto");
// }


// alert(contarCifras(numero));