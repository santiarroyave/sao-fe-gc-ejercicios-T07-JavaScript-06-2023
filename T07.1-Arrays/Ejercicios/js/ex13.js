// 13/15
// Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su nombre, tiempo de preparación e ingredientes.
// Haz una función que saque por consola el nombre, el tiempo y una lista de los ingredientes.

let receta = {
    "nombre":"Pizza Carbonara",
    "tiempo": 13,
    "ingredientes": ["huevo", "queso pecorino", "queso parmesano", "guanciale", "queso mozzarella", "nuez moscada", "pimienta"],
};

const informacion = (new1) => {
    console.log(new1.nombre);
    console.log(new1.tiempo + " minutos");
    console.log(new1.ingredientes);
};

informacion(receta);