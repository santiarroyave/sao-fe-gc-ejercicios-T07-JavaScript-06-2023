// 15/15
// Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio anterior para sacarlas por consola.

// Parte 2/2 (ex15.ts / main.ts)

alert("Ejercicio 15");

// INSTANCIAS
let receta1 = new Receta("Pizza Carbonara", 13, ["huevo", "queso pecorino", "queso parmesano", "guanciale", "queso mozzarella", "nuez moscada", "pimienta"]);

let receta2 = new Receta("Pizza Cheesix",12,["crema fresca", "queso Emental", "queso mozzarella", "queso cheddar", "queso de cabra", "gotgonzola", "parmesano"]);

let receta3 = new Receta("Pizza Barbacoa", 14, ["tomate", "pollo marinado", "salsa bbq", "queso cheddar", "queso havarti", "queso gouda", "bacon"]);


// FUNCIONES

// MÉTODO 1 - leyendo de una en una
const mostrarReceta = (newReceta: object) => {
    console.log(newReceta.getNombre());
    console.log(newReceta.getTiempo());
    console.log(newReceta.getIngredientes());
};

// MÉTODO 2 - creando lista de recetas y las leeyendolas todas
// Creando Objeto
const mostrarRecetaConArray = (newReceta: object[]) => {
    
    let listaRecetas = [];

    for (let i = 0; i < newReceta.length; i++) {
        listaRecetas.push({
            "nombre" : newReceta[i].getNombre(),
            "tiempo" : newReceta[i].getTiempo(),
            "ingredientes" : newReceta[i].getIngredientes(),
        });
    }

    // console.log(newReceta);
    for (let i = 0; i < listaRecetas.length; i++) {
        console.log(listaRecetas[i].nombre);
        console.log(listaRecetas[i].tiempo + " minutos");
        console.log(listaRecetas[i].ingredientes);
    }

};

// Método 1
console.log("****************");
console.log("Método 1 - leyendo de una en una");
console.log("****************");
mostrarReceta(receta1);
mostrarReceta(receta2);
mostrarReceta(receta3);

// Método 2
console.log("****************");
console.log("Método 2: creando lista de recetas y las leyendolas todas");
console.log("****************");
mostrarRecetaConArray([receta1, receta2, receta3]);

