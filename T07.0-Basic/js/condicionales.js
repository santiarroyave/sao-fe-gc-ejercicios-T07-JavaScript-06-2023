// Ejemplo de saludo dia de la semana

let dia = "Miercoles";

// las mayusculas las tiene en cuenta
switch (dia) {
    case "lunes":
        alert("hoy es lunes");
        break;
    case "martes":
        alert("hoy es martes");
        break;
    case "miercoles":
        alert("hoy es miercoles");
        break;
    case "jueves":
        alert("hoy es jueves");
        break;
    case "viernes":
        alert("hoy es viernes");
        break;
    case "sabado":
        alert("hoy es sabado");
        break;
    case "domingo":
        alert("hoy es domingo");
        break;

    default:
        alert("No es un dia de la semana");
        break;
}