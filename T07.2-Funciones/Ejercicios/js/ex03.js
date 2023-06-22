// 3/12

// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false.
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo.
// Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

alert("Ejercicio 3/12: Saber si es primo");

// VARIABLES
let numero = prompt("Por favor indica un numero");

// FUNCIONES
const esPrimo = (valor) => {
    let divisibles = [];
    
    if(valor == 0 || valor == 1 ){
        console.log("El numero es un: " + valor);
    }else{
        for (let i = 2; i < valor; i++) {
            if(valor%i == 0){
                console.log("Puede dividirse entre: " + i);
                divisibles.push(i);
            }
        }
    }
    
    console.log(divisibles);

    if(divisibles.length == 0){
        console.log("primo");
        return true
    }else{
        console.log("no es primo"); 
        return false;   
    }
};

// PROGRAMA
alert(esPrimo(numero));
