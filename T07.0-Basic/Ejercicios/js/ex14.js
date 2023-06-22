// Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la consola el nombre del mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2 corresponde a "Febrero", etc.).

let diaMes = +prompt("Ej 14. Por favor ingrese un mes valores del 1 al 12");

switch (diaMes) {
    case 1:
        alert("Has elegido el mes de Enero");
        break;
    case 2:
        alert("Has elegido el mes de Febrero");
        break;
    case 3:
        alert("Has elegido el mes de Marzo");
        break;
    case 4:
        alert("Has elegido el mes de Abril");
        break;
    case 5:
        alert("Has elegido el mes de Mayo");
        break;
    case 6:
        alert("Has elegido el mes de Junio");
        break;
    case 7:
        alert("Has elegido el mes de Julio");
        break;
    case 8:
        alert("Has elegido el mes de Agosto");
        break;
    case 9:
        alert("Has elegido el mes de Septiembre");
        break;
    case 10:
        alert("Has elegido el mes de Octubre");
        break;
    case 11:
        alert("Has elegido el mes de Noviembre");
        break;
    case 12:
        alert("Has elegido el mes de Diciembre");
        break;
        
        default:
        alert("No has seleccionado un mes válido");
        break;
}