// redondear(n, decimales)
/*const redondear1 = 8.485158;
redondear1.toFixed(2);
let redondear2 =Number(redondear1.toFixed(2));

console.log(redondear2)*/


// redondear con funcionaes

/*function redondear(n, decimales ){

    return Number(n.toFixed(decimales));
}

redondear(1.111111111, 7)

console.log(redondear(34.7653453,5))*/


// Promedio de un texto
const texto = "8, 9.5, x, 7, , 10"
console.log(texto)

const number = texto.split(",").map(s => s.trim()).filter(s => s!== "").map(Number).filter(n => !Number.isNaN(n));

const suma = number.reduce((acc, n) => acc + n, 0);
console.log(suma);

let promedio = Number((suma / number.length).toFixed(2));
console.log(promedio);









