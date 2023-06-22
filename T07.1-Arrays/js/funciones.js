// ************************************

// let ValorA = 7;
// let ValorB = 11;

// let suma = ValorA + ValorB;

// console.log(suma);

// ValorA = 3;
// ValorB = -5;

// suma = ValorA + ValorB;
// console.log(suma);

// ************************************
// Funciones JS EM5
function comoYoQuiera(arg1, arg2){
    // Hace algo
}

function sumaDos(A,B){ //funciones de tipo void (no retornan nada)

    // no hace falta poner let porque solo es  local de la funcion. solo si colocas 'var' sera accesible desde cualquier lado
    suma = A + B;
    console.log(suma);
}

sumaDos(10,15);

function sumaTres(A,B){
    suma = A + B;
    return suma;
}

console.log(sumaTres(20,10));


// ************************************
// Funciones JS EM6

// const sumaCuatro = () => {};
const sumaCuatro = (newA,newB,newC) => {
    //se pueden llegar a quitar partes para que sea más corto
    let suma =newA+newB+newC;
    return suma;
};

console.log(sumaCuatro(1,2,4));
