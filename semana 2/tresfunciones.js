//descuento(precio, porcentaje)
function descuento(precio, porcentaje = 10){

    return precio - (precio*porcentaje)/100
}
console.log(descuento(200))
console.log(descuento(200, 25))

//promedio(...notas)
function promedio(...numeros){
    if(numeros.length === 0){
        return 0;
    }

    return numeros.reduce((a, b) => a + b, 0)/numeros.length;
}
console.log(promedio(8, 9, 10), promedio())// 9 0

// aplicarDosVeces(fn, x)
function aplicarDosVeces(fn, x){
    return fn(fn(x));
}
console.log(aplicarDosVeces((x) => x * 2, 3))