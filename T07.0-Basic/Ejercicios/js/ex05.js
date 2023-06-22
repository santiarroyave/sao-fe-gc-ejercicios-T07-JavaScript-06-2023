/*
Declarar una variable llamada "precioProducto" y asignarle un valor numérico que
represente el precio de un producto.
Luego, declarar una variable llamada "porcentajeDescuento" y asignarle un valor numérico que represente el porcentaje de descuento aplicado al producto.
Calcular el precio final después del descuento (usando la fórmula precioProducto - (precioProducto * porcentajeDescuento / 100)) y mostrar el resultado en la consola.
*/

let precioProducto = 20;
let porcentajeDescuento = 10;

let precioFinal = precioProducto - ((precioProducto*porcentajeDescuento)/100);
alert(precioFinal + " €");