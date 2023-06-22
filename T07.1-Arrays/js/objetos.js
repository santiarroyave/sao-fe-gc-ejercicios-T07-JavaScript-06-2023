// objetos en JS

// es un objeto
let alumno = {
    "nombre":"Diana",
    "edad": 78,
    "curso": 23

};

console.log(alumno);


alumno.notaMedia = 7.5;

// es un array de objetos esto son los JSON
// en esto se basa MongoDB
let alumnos = [
    {
    "nombre":"Diana",
    "edad": 78,
    "curso": 23
    },
    {
    "nombre":"Raul",
    "edad": 75,
    "curso": 27
    },
    {
    "nombre":"Melany",
    "edad": 37,
    "curso": 54
    },
    {
    "nombre":"Diego",
    "edad": 34,
    "curso": 33
    }
];

console.log(alumnos);
console.log(alumnos[2]);
console.log(alumnos[2].nombre);