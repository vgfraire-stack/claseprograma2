const lista =  ["naranja", "manzana", "platano", "pera", "manzanaverde"];

let lista1 = lista.push("Mango");

console.log(lista)
console.log(lista1)

let lista2 = lista.pop();

console.log(lista)
console.log(lista2)


let lista3 = lista.unshift("Limon")

console.log(lista)
console.log(lista3)

let lista4 = lista.shift()

console.log(lista)
console.log(lista4)

let lista5 = lista.splice(1,2);

console.log(lista)
console.log(lista5)

let remplazarLista = lista.splice(1,1, "piña") 

console.log(lista)
console.log(remplazarLista)

let insertarlista = lista.splice(1,0,"Uva","uvaverde")

console.log(lista)
console.log(insertarlista)

let cortarlista = lista.slice(0,1)

console.log(lista)
console.log(cortarlista)



//slice y splice
const b = [1,2,3,4,5];
console.log(b.splice(1,2));
// [2,3]
console.log(b);
// [1,4,5]
b.splice(1,0, "x", "y");
console.log(b);
// [1, "x", "y", 4, 5]
console.log(b.splice(1,3));
// ["x", "y"] (b no cambia)


// Buscar un arreglo
const n = [5, 12, 8, 130, 44];
n.indexOf(8) // 2
n.includes(130) // true
n.find((x) => x > 10) // 1
n.find((x)=> x > 1000) // undefined
n.some ((x) => x > 100) //true
n.every((x) => x > 5) // false

// map, filter y reduce

const precios = [100, 250, 80, 400];
precios.map((p) => p + 20) // [120, 270, 100, 420]
precios.filter((p) => p > 150 )// [250,400]
precios3 = precios.reduce((acum, p) => acum + p, 0) //830

console.log(precios3)

// sort 
const nums = [10, 9 ,1 ,100];
[...nums].sort()
// [1,10,100,9]
(...nums).sort((a, b) => a = b)
// [1,9,10,100]
(...nums).sort((a, b) => b = a)
// [100, 10, 9, 1]