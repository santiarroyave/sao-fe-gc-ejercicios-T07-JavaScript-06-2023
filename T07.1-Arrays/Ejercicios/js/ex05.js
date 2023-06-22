// 5/15
// Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale sus elementos y vacíe los arrays originales.
// Por ejemplo, con los arrays arrayUno = [1, 2, 3] y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

let pares = [2,4,6,8,10,12,14,16,18,20];
let impares = [1,3,5,7,9,11,13,15,17,19];

const nuevoArrayIntercalado = (new1,new2) => {
    tamanoArray = new1.length;
    let nuevaLista = [];

   // va vaciando los array originales a medida que crea el nuevo mezclado
    for (let i = 0; i < tamanoArray; i++) {
        nuevaLista.push(new1[0]);
        nuevaLista.push(new2[0]);

        new1.shift();
        new2.shift();
    }
    
    return nuevaLista;
}


let listasMezcladas = nuevoArrayIntercalado(impares,pares);
console.log(listasMezcladas);