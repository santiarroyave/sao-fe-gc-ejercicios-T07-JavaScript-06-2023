// 11/15
// Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente a tres de esas propiedades.

let persona = {
    "nombre": "Elon",
    "apellidos": "Reeve Musk",
    "edad": 51,
    "direccion": "Calle de constanti 1",
    "ciudad": "Constantí",
    "pais": "España",
}

let {nombre} = persona;
let {edad} = persona;
let {pais} = persona;

console.log(nombre);
console.log(edad);
console.log(pais);