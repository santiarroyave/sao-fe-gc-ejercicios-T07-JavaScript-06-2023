// 4/15
// Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

let palabra = "melocotón";

const convertirEnLetrasInvertidas = (new1) => {
    
    console.log(new1);
    let letras = [];

    for (let i = 0; i < new1.length; i++) {
        letras[i] = new1.charAt(i);
    }

    // console.log(letras);

    return letras.reverse();
}



let palabraEnArrayInvertido = convertirEnLetrasInvertidas(palabra);

console.log(palabraEnArrayInvertido);