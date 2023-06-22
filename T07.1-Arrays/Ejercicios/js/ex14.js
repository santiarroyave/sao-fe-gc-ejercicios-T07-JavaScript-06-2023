// 14/15
// Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas similares, con las mismas propiedades.
// Utiliza también la función del ejercicio anterior y saca por consola todas las recetas de tu array.


let recetas = [
    {
        "nombre":"Pizza Carbonara",
        "tiempo": 13,
        "ingredientes": ["huevo", "queso pecorino", "queso parmesano", "guanciale", "queso mozzarella", "nuez moscada", "pimienta"],
    },
    {
        "nombre":"Pizza Cheesix",
        "tiempo": 12,
        "ingredientes": ["crema fresca", "queso Emental", "queso mozzarella", "queso cheddar", "queso de cabra", "gotgonzola", "parmesano"],
    },
    {
        "nombre":"Pizza Barbacoa",
        "tiempo": 14,
        "ingredientes": ["tomate", "pollo marinado", "salsa bbq", "queso cheddar", "queso havarti", "queso gouda", "bacon"],
    }
];

const informacion = (new1) => {

    for (let i = 0; i < new1.length; i++) {
        console.log(new1[i].nombre);
        console.log(new1[i].tiempo + " minutos");
        console.log(new1[i].ingredientes);
    }

};

informacion(recetas);