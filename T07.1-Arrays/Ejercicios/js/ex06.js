// 6/15
// Crea un array con al menos 10 números y una función que los divida en otros dos arrays: uno para pares y otro para impares.
// A continuación, saca por consola ambos arrays resultantes concatenados.

let numero = [1,2,3,4,5,6,7,8,9,10,34,567,22393,828,32902];

const dividir = (new1, type) => {

    let nuevaLista = [];

    switch (type) {
        case "par": //pares
            for (let i = 0; i < new1.length; i++) {
                if(new1[i]%2 == 0){
                    nuevaLista.push(new1[i])
                }
            };
            break;
        case "impar": //impares
            for (let i = 0; i < new1.length; i++) {
                if(new1[i]%2 != 0){
                    nuevaLista.push(new1[i])
                }
            };
            break;
        default:
            console.log("no has seleccionado un tipo valido");
            break;
    }

    console.log(nuevaLista);
};

console.log(dividir(numero,"impar"));
console.log(dividir(numero,"par"));

