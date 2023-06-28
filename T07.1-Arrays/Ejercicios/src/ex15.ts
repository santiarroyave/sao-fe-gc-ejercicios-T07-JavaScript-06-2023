// 15/15
// Haz lo mismo declarando una clase "receta" e instanciando cada una de las nuevas recetas. Luego añádelas a un array y reutiliza la función que habías creado en el ejercicio anterior para sacarlas por consola.

// Parte 1/2 (ex15.ts / main.ts)

class Receta{

    // 1- Atributos
    private nombre: string;
    private tiempo: number;
    private ingredientes: string[];

    // 2- Constructores
    constructor(newNombre: string, newTiempo: number, newIngredientes: string[]){
        this.nombre = newNombre;
        this.tiempo = newTiempo;
        this.ingredientes = newIngredientes;
    }
    
    // 3- Métodos
    getNombre(){
        return this.nombre;
    }
    
    getTiempo(){
        return this.tiempo;
    }
    
    getIngredientes(){
        return this.ingredientes;
    }
}