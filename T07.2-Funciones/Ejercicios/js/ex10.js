// 10/12

// Crea un array de números de un tamaño pasado por prompt, el array contendrá números aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor de todos.
// Haz un método para comprobar que el número aleatorio es primo, puedes hacer todos los métodos que necesites.

alert("Ejercicio 10/12: Array de primos");
// Notas: otro método (que no implemento) podria ser definir todos los primos existentes en ese rango y luego seleccionarlos aleatoriamente. Asi evitariamos un bucle infinito si definimos mal los minimos y maximos y reduciriamos el numero de operaciones.

// VARIABLES
let tamañoArray = parseInt(prompt("Por favor indique el tamaño del array."));
let lista = new Array(tamañoArray);

// peligro, si entre el min y el max no hay primos se genera un bucle infinito
let min = 0;
let max = 100;


// FUNCIONES
const numAleatorioPrimo = (newMin, newMax) => {


    let numero = 0;
    let verificador = null;

    for (let i = 0; i < lista.length; i++) {

        verificador = false;

        // Genera aleatorios hasta que el numero sea un primo
        while (verificador == false) {
            numero = Math.floor(Math.random()*(newMax-newMin+1)+newMin);
            
            // comprobamos si es primo
            if (esPrimo(numero) == true){
                lista[i] = numero;
                verificador = true;
                // console.log(`El numero primo es: ${numero}`);
            }
        }
    }
};

const esPrimo = (num) => {
    let divisibles = [];

    if(num == 0 || num == 1 ){
        return false;
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

const primoMayor = () => {
    let numMayor = 0;
    for (let i = 0; i < lista.length; i++) {
        if (numMayor < lista[i]){
            numMayor = lista[i];
        }
        
    }
    console.log(`El número más grande es ${numMayor}`);
};

const leerLista = () => {
    // for (let i = 0; i < lista.length; i++) {
    //     sumaTotal += lista[i];
    //     console.log(`Posición: ${i} - valor: ${lista[i]}`);
    // }
    console.log(`Lista de ${lista.length} primos: ${lista}`);
    // alert(lista);
};


// PROGRAMA
console.log(`Valores aleatorios entre ${min} y ${max}`);
numAleatorioPrimo(min,max);
leerLista();
primoMayor();
