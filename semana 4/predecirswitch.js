//¿Qué imprime? Predice antes de ejecutar

//A
switch(2) {
    case 1: console.log("a");
    case 2: console.log("b");
    case 3: console.log("c"); break;
}

//Predecir: Manda Reference error porque no imprime nada ya que no tiene return
//Resultado: Regresa b y c porque empieza del 2

//B
const valor = "5";
switch(valor) {
    case 5: console.log("número"); break;
    default: console.log("otro");
}
//Predecir: Regresa otro.
//Resultado: Si refresa otro potque termina en el case 5 y ahí tiene el break.

//C 
switch(9) {
    default: console.log("d");
    case 1: console.log("u"); break;
    case 2: console.log("x");
}
//Predecir: Va a regresar "d"
//Resultado: Imprime "U"

//D
const n = 90;
switch(true){
    case n >= 80: console.log("B"); break;
    case n >= 90: console.log("A"); break;
}
//Predecir: Se imprime "B"
//Resultado: Imprime "B" porque n es mayor o igual a 80