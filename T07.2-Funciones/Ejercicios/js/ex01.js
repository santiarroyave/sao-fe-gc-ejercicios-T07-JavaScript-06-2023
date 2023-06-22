// 1/12

// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los valores necesarios para calcular el área. Para ello has de crear un método por cada figura para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

alert("Ejercicio 1/12: Calcular áreas");

// VARIABLES
let datoUsuario1 = null;
let datoUsuario2 = null;

// FUNCIONES
const areaCirculo = (valor) => {
    console.log("El área del círculo es: " + (valor**2)*Math.PI);
    return (valor**2)*Math.PI;
};

const areaTriangulo = (valorA,valorB) => {
    console.log("El área del triangulo es: " + (valorA*valorB)/2);
    return (valorA*valorB)/2;
};

const areaCuadrado = (valor) => {
    console.log("El área del cuadrado es: " + valor*valor);
    return valor*valor;
};

// PROGRAMA
let eleccionUsuario = prompt("Por favor escribe que área deseas calcular: circulo, triangulo, cuadrado");

switch (eleccionUsuario) {
    case "circulo":
        datoUsuario1 = prompt("Por favor indica cuanto mide el radio del círculo");
        alert(areaCirculo(datoUsuario1));
        datoUsuario1 = null;
        break;
        
    case "triangulo":
        datoUsuario1 = prompt("Por favor indica cuanto mide la base del triangulo");
        datoUsuario2 = prompt("Ahora indica cuanto mide la altura del triangulo");
        alert(areaTriangulo(datoUsuario1, datoUsuario2));
        datoUsuario1 = null;
        datoUsuario2 = null;
        break;
            
    case "cuadrado":
        datoUsuario1 = prompt("Por favor indica cuanto mide el lateral de el cuadrado");
        alert(areaCuadrado(datoUsuario1));
        datoUsuario1 = null;
        break;

    default:
        alert("No has seleccionado un valor válido");
        break;
        
};