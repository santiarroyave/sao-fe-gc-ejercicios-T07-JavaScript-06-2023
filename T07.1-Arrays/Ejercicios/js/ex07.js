// 7/15
// Utilizando el array del ejercicio anterior, crea una función que saque por consola únicamente los números mayores que 5

let numeros = [1,2,3,4,5,6,7,8,9,10,34,567,22393,828,32902];

const mayoreQueCinco = (new1) => {
    let mayor = 5;

    for (let i = 0; i < new1.length; i++) {
        if(new1[i] > mayor){
            console.log(new1[i]);
        }
    }
};


mayoreQueCinco(numeros);
