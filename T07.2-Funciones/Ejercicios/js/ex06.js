// 6/12

// Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que controlarlo) pedido por prompt.
// Crea un método que realice esta acción, pasando el número por parámetro devolverá el número de cifras.

alert("Ejercicio 6/12: Contar numero de cifras");

// VARIABLES
let numero = prompt("Por favor indique un numero entero positivo para contar las cifras que tiene");

// FUNCIONES
const contarCifras = (num) => {
    if (num == "" | num == null){
        return "(numero no válido)";
    }else{
        numEntero = parseInt(num);
        
        if(numEntero > 0){
            cifras = numEntero.toString().length;
            return cifras;
        }else{
            return "(numero no válido)";
        }
    }
};



// PROGRAMA
console.log("Numero de cifras: " + contarCifras(numero));
alert("Numero de cifras: " + contarCifras(numero));

