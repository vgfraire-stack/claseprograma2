const x = 1234.5678;
x.toFixed(2); // "1234.57"
typeof x.toFixed(2); // "string"
Number(x.toFixed(2)); // 1234.57
(255).toString(2) // 1111111
const peso = new Intl.NumberFormat("es-Mx", {
style: "currency", currency: "MXN"
});
peso.format(x) // $1,234.57

console.log(x);

// Cuando quieres redondear tanto en negativo y en positivo se va para arriba segun el signo
Math.round(2.5) //3
Math.round(-2.5) //-2

// Los binarios no usan decimales
0.1 + 0.2 //0.30000000000000004
0.1 + 0.2 === 0.3 // false