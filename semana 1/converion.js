const resultado = Math.max(3,9, 4);
console.log(resultado); // ->9

parseInt("42px", 10)// -> 42
parseInt("px42", 10)// -> NaN
parseFloat("3.5kg")// -> 3.5
Number("3.5kg")// -> NaN
isNaN("abc") // -> true
Number. isNaN("abc")// -> false


// Los textos no se modificans
const t = "Hola Mundo";
t.toUpperCase(); // se descarta
console.log(t); // -> Hola Mundo
const mayus = t.toUpperCase();
console.log(mayus); // ->Hola Mundo
const s = "JavaScript";
console.log(s.length, s[0]); // -> 10
console.log(s.at(-1)); // -> t

//Buscar dentro de un texto
const frase = "el perro y el gato";
frase.indexOf("el")// -> 0
frase.indexOf("el", 1)// -> 11
frase.indexOf("el")// ->11
frase.indexOf("zorro")// -> -1
frase.includes("gato")// ->true
frase.startsWith("el")// ->true
frase.endsWith("perro")// ->false

//Extraer y transformar
const f = "2026-10-19";
let fecha = f.slice(0,4) // -> 2026
let fecha1 =f.slice(5,7)// -> 10
let fecha2 = f.slice(-2) // -> 19
let fecha3 = f.split("-") // -> ["2026", "10", "19"]
let fecha4 = " hola ".trim() // -> "hola"
let fecha5 = "7" .padStart(3, "0")// -> "007"
let fecha6 = "a-b-c" .replaceAll("-", "+")// -> "a+b+c" 

console.log(fecha)
console.log(fecha1)
console.log(fecha2)
console.log(fecha3)
console.log(fecha4)
console.log(fecha5)
console.log(fecha6)

//Acentos y orden alfábeticos
"é" > "z" // true
const L = ["b", "á", "a"];
L.sort() // -> ['a', 'b', 'á]
const es = (x, y) => x.LocaleCompare(y, "es");
L.sort(es) // -> ['a'], 'á', 'b']
const sinAcentos = (txt) =>
txt .normalize("NFD") .replace(/[-*]/g, "");
sinAcentos("Jose Ángel Núñez")
// -> Jose Angel Nuñez