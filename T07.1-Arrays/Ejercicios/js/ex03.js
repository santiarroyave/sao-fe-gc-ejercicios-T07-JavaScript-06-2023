// 3/15
// Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"],
// Elimina "DOM" del array. Añade en su lugar el elemento "Objetos".
// Elimina el elemento "Arrays". Añade en su lugar el elemento "ArraysDifíciles".
// Haz una copia del array que solo incluya los últimos dos elementos.
// Obtén el índice del elemento "Funciones".

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
console.log("Original: " + javascript1); 

javascript1.shift();
console.log("Modificación 1: " + javascript1);

javascript1.unshift("Objetos");
console.log("Modificación 2: " + javascript1);

javascript1.pop();
console.log("Modificación 3: " + javascript1);

javascript1.push("ArraysDifíciles");
console.log("Modificación 4: " + javascript1);


// Haz una copia del array que solo incluya los últimos dos elementos.
let javascript1Copia = javascript1.slice(2);
console.log("Nuevo Array 1: " + javascript1Copia);

let javascript1Copia2 = [javascript1[2],javascript1[3]];
console.log("Nuevo Array 2: " + javascript1Copia2);


// Obtén el índice del elemento "Funciones".
console.log(javascript1.indexOf("Funciones"));
