// Realiza un programa que solicite al usuario ingresar el día de la semana (como número del 1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1 corresponde a "Lunes", 2 corresponde a "Martes", etc.).

let diaSemana = +prompt("Ej 10. Por favor ingrese un dia de la semana valores del 1 al 7");

switch (diaSemana) {
    case 1:
        alert("El dia seleccionado corresponde al Lunes");
        break;
    case 2:
        alert("El dia seleccionado corresponde al Martes");
        break;
    case 3:
        alert("El dia seleccionado corresponde al Miercoles");
        break;
    case 4:
        alert("El dia seleccionado corresponde al Jueves");
        break;
    case 5:
        alert("El dia seleccionado corresponde al Viernes");
        break;
    case 6:
        alert("El dia seleccionado corresponde al Sábado");
        break;
    case 7:
        alert("El dia seleccionado corresponde al Domingo");
        break;
        
        default:
        alert("No has seleccionado un valor válido");
        break;
}