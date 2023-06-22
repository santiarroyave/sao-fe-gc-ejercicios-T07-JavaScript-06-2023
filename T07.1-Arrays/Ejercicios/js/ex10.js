// 10/15
// Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad, dirección, ciudad, país... y lo que quieras).
// Crea una función que saque por consola el nombre completo (nombre y apellidos) de la persona a modo de string.

let persona = {
    "nombre": "Elon",
    "apellidos": "Reeve Musk",
    "edad": 51,
    "direccion": "Calle de constanti 1",
    "ciudad": "Constantí",
    "pais": "España",
}

const nombreCompleto = (new1) => {
    nombre = new1.nombre + " " + new1.apellidos;
    console.log(nombre);
};

nombreCompleto(persona);