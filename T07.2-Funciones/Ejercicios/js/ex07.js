// 7/12

// Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

alert("Ejercicio 7/12: Cambio de divisas");

// VARIABLES

let euros = prompt("Por favor ingrese la canidad de euros que desea convertir");
let cambio = prompt("Ahora indique a que moneda desea cambiarlo: (Libras, Dolares, Yenes)");

// FUNCIONES
const cambioDivisa = (newEuros, newCambio) => {
    dinero = parseInt(newEuros);

    switch (newCambio) {
        case "libras":
            console.log(dinero * 0.86 + " libras");
            alert(dinero * 0.86 + " libras");
            break;
            
            case "dolares":
            console.log(dinero * 1.286 + " $");
            alert(dinero * 1.286 + " $");
            break;
            
            case "yenes":
            console.log(dinero * 129.852 + " yenes");
            alert(dinero * 129.852 + " yenes");
            break;
    
        default:
            console.log("No has introducido un valor válido");
            break;
    }
};

// PROGRAMA
// Se vonvierte a minusculas para evitar problemas en el switch
cambioDivisa(euros, cambio.toLowerCase());
