// 8/15
// Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 = ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se repite algún elemento y lo saque por consola.

javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
javascript2 = ["Objetos", "Arrays", "ParseInt"];

const elementoRepetido = (new1,new2) => {

    for (let i = 0; i < new1.length; i++) {

        for (let x = 0; x < new2.length; x++) {
            
            if(new1[i] == new2[x]){
                console.log(new1[i]);
            };
            
        };
        
    };
};

elementoRepetido(javascript1, javascript2);