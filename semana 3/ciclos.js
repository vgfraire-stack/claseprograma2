// for: sé cuántas vueltas
/*for(let i = 1; i <= 3; i++) console.log("vuelta", 1);
//while: depende de algo que va cambiando
while (monto < 2000) { monto *= 1.07; anios++; } 

//while
let n = 1; // valor inicial
while(n <= 17) { // condicion 
    console.log("n vale " + n)
    n++; // avanza   
}
// -> n vale 1
// -> n vale 2
// -> n vale 3


//Pasos hasta llegar a 1
let numero = 27;
let pasos = 0;
while (numero !== 1){
    numero = numero % 2 === 0
    ? numero / 2
    : numero * 3 + 1;
    pasos++;
}
console.log(pasos); // 111

// Años hasta duplicar el 7 % anual
let monto = 1000;
let anios = 0;
while(monto < 2000){
    monto *= 1.07;
    anios++;
}
console.log(anios); // -> 11 */
// ¿Qué imprime? Predice antes de ejecutar
//A
let u = 1;
while ( u <= 3) u++;
console.log(u);
// Predicción -> imprime 2 y 3 porque el valor inicial es 1 y llega hasta el 3
// Resultado ->  Imprime el 4 ya que es el valor mayor a 3

//B
let k = 10, v = 0;
while (k < 5) { v++; k++ }
console.log(v, k);
//Prediccion -> Imprime que mientras k sea menor a 5 aumenta el v y el k
//Resultado -> al usar el do while dice que mientras k sea menor 5 se cumple la función, pero como k ya vale 10 no se cumple y lo omite y queda 0 10

// C
let q = 10, p = 0;
do { p++; q++} while ( q < 5);
console.log(p, q)
// Prediccion -> Sucede lo mismo que el anterior
// Resultado -> Imprime 1 11 en este código se aumenta en uno p y q pasarian a 11 y 1, comprueba si p es menor a 5 y como no es deja de aumentar e imprime 1 y 11

//D
let t = 3;
while( t > 0) { console.log(t); t--; }
console.log("fin");
// Prediccion -> hace la cuenta de 3 a 1 de forma descendente ya que el t-- resta de 1 en 1 y empieza en 3 llega al 1 y muestra el fin 
// Resultado -> Si hace eso

// Bucle do While
let kk = 10;
do {
    console.log("kk vale " + kk);
    // -> kk vale 10
    kk++;
} while (k < 5); // ya es falsa 
// En el navegador: pedir hasta que sea válido
let edad; 
do {
    edad = Number(prompt("Edad (1 a 120"));
} while (Number.isNaN(edad) || edad < 1 || edad > 120);

let a = 0, b = 0;
while(a > 5) a++; // el cuerpo corre 0 veces
do{ b++; } while (b > 5); // corre 1 vez
console.log(a, b); // -> 0 1 


