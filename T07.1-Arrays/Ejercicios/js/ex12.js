// 12/15
// Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos tres) y distintos valores.
// Crea una función que saque por consola el valor de una de las propiedades para todos los objetos.

let frutas = [
    {
        "nombre": "manzana",
        "color": "verde",
        "tamaño": "normal"
    },
    {
        "nombre": "sandia",
        "color": "verde",
        "tamaño": "grane"
    },
    {
        "nombre": "cereza",
        "color": "rojo",
        "tamaño": "pequeño"
    }
];

const nombres = (new1) => {
    for (let i = 0; i < new1.length; i++) {
        console.log(new1[i].nombre);
    }
}

nombres(frutas);