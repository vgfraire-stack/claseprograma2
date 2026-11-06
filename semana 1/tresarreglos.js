//promedio
const promedio = [9, 5, 8, 6.5]
let promedio1 = promedio.filter((p) => p > 6).reduce((acum, p) => acum + p,0)/3
let promedio2 = promedio1.toFixed(2)

console.log(promedio2)

// Cuadrados de los pares

const num = [1, 2, 3, 4 ,5 ,6];
num.sort((a, b) => b - a);

let par = 0;

let cuadrado = []

for(let i = 0; i < num.length; i++){

    if(par === num[i] % 2){

        cuadrado = num[i] ** 2

    }

    console.log(cuadrado)

}

// Orden en español

const palabras = ["pera", "Manzana", "uva", "Árbol"]

let palabrasOrdenadas = palabras.sort((a, b) => a.localeCompare(b))

console.log(palabrasOrdenadas)



