// 12/12

// Crea un array de números de un tamaño pasado por prompt, el array contendrá números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un número correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

alert("Ejercicio 12/12: Mostrar valores de una lista aleatoria que acaban con el digito que elijamos");

// VARIABLES
let tamañoArray = parseInt(prompt("Por favor indique el tamaño del array."));
let terminacion = parseInt(prompt("Elige un dígito (0-9):"));
let lista = new Array(tamañoArray);
let listaSeleccion = new Array();
let min = 0;
let max = 300;

// FUNCIONES
const numAleatorio = (minValor, maxValor) => {
    return Math.floor(Math.random()*(maxValor-minValor+1)+minValor)
};

const verificarNum = (num) => {
    if (num == null || num > 9){
        return false;
    }else{
        numEntero = parseInt(num);
        if(numEntero >= 0){
            return true;
        }else{
            return false;
        }
    }
};

// PROGRAMA
for (let i = 0; i < lista.length; i++) {
    lista[i] = numAleatorio(min,max);
}

if(verificarNum(terminacion) == true){
    for (let i = 0; i < lista.length; i++) {

        // Verifico si el ultimo digito coincide con la terminacion elegida
        if((lista[i]%10) == terminacion){
            listaSeleccion.push(lista[i]);
        }
    }
    console.log(`Lista con numeros aleatorios: ${lista}`);
    console.log(`Lista con numeros acabados en ${terminacion}: ${listaSeleccion}`);
}else{
    console.log("Digito incorrecto");
}