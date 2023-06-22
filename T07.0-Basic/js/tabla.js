let valor = prompt("Nº de tabla");



// MANERA 1: FOR
// *****************
// for (let i = 0; i <= 10; i++) {
//     // console.log(`${valor}x ${i} = ${valor*i}`);

//     console.log(valor+"x"+i+"="+(valor*i)); // Interpolación
    
// }


// MANERA 2: WHILE
// *****************
let i = 0;
while(i<=10){
    console.log(valor+"x"+i+"="+(valor*i));
    i++
}