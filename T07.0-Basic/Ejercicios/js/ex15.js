// Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible entre 400).

alert("Ej. 15: Saber si un año es bisiesto");
let año = prompt("Por favor ingrese un año");

if(año%4 == 0){
    if(año%100 == 0){
        if(año%400 == 0){
            alert(`El año ${año} es bisiesto`);
        }else{
            alert(`El año ${año} NO es bisiesto`);
        }
    }else{
        alert(`El año ${año} es bisiesto`);
    }
}else{
    alert(`El año ${año} NO es bisiesto`);
}