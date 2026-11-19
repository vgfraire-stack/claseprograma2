// ¿Qué imprime? Predice antes de ejecutar

//A
'use strict'
let x = 1;
function f(){
let x = 2; return x;
}
console.log(f(), x)
// Prediccion -> Regresa el 2 y un 1

// Lo que se hace -> Regresa 2, 1  porque en el console.log mandas a imprimir f() que lo convierte el 1 al 2 pero ahí también llama al x y como es fuera de la función regresa el 1 porque no se convirtio

//B
/*
'use strict'
function g(){
total = 5;
}
g();
console.log(total);
// Prediccion -> Regresa undefined porque el total esta declarado dentro de la función

// Resultado -> Regresa que no esta definido el total */

//C
'use strict'
const fs = [];
for(let i = 0; i < 3; i ++)
    fs.push(() => i * 10);
    console.log(fs.map((f) => f()));
// Prediccion -> No se que va a regresar
// Resultado -> Regresa de 10 en 10 por la condicion del ++, en este caso empieza de 0 y luego agrega el 10, 20

//D
'use strict'
function crear(){
    let n = 10;
    return() => ++n;
}
const a = crear(), b = crear();
console.log(a(), a(), b());
//Prediccion -> Va a regresar ReferenceError
/*Resultado -> Yo pense que oba a regresar un error por el ++n pero en realidad si funciona el contador en lo que se refiere de hacer una secuencia ya que regresa la secuencia de 11 12 11, lo regresa en ese orden 
porque al imprimir le resultado se comienza con una secuencia a(), a() pero regresa al 11 porque se imprime b() y ese aunque comparte la funcion de sumar 10 de uno en uno regresa desde el principio ya que es una constante diferente
pero declarada con la misma condicion del a() */
