// dia del mes
function diasDelMes(mes, anio = 2026){
    let dias = 0;
switch (mes){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: dias = 31
    break;

    case 4: case 6: case 9: case 11: dias = 30
    break;
    
    case 2: 
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0; 
    dias = esBisiesto ? 29 : 28;
    break;
    default:
        dias = "Mes invalido";

}
return dias;
}
console.log(diasDelMes(2, 2028))
// 29
console.log(diasDelMes(11, 2026))
// 28



//calcular (a, op, b)

function calcular(a, op, b ){ 
let operacion;

switch(op){
case "+": operacion = a + b; break;
case "-": operacion = a - b; break;
case "*": operacion = a * b; break;
case "/": operacion = (b === 0 ? "división entre cero": a/b); break;

default: "operador desconocido"; break
}

return operacion;

}

console.log(calcular(8, "*", 5));
// 40
console.log(calcular(8, "/", 0));
// division entre cero
console.log(calcular(8, "^", 2));
// operador desconocido

//letra(Nota)
 let cali = 0;

function letra(nota){

    cali = nota;
   
    if(cali >= 90){
        console.log("A")
    }
    else if(cali >= 80){
        console.log("B")
    }
    else if(cali >= 70){
        console.log("C")
    }
    else if (cali < 70){
        console.log("F")
    }

    return cali;
}
console.log(letra(85))
// B
console.log(letra(90))
// A
console.log(letra(69.9))
// F



// torre de asteristicos
const altura = 5; 

for(let i = 1; i <= altura; i++){
    console.log("*".repeat(i));
}





