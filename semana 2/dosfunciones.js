//funcion esPrimo(n) contiene dos console.log si son numeros primos devuelve true, si no devuelve false
function esPrimo(n){

    if( n <= 1){ 

return false;
    }

for(let i = 2; i <= Math.sqrt(n); i++){

if(n % i === 0){
    return false;
}
}

return true;

}

console.log(esPrimo(7))// -> true
console.log(esPrimo(1))// -> false

//Convierte entre "C", "F" Y "K" y devuelve un numero
function convertirTemperatura(V, de, a ){
let co = 0;

    if(de === "C" && a === "F"){
    
       co = V * (9/5) + 32;
        
    }

    if(de === "C" && a === "K"){
      co = V + 273.15;
    }

    if(de === "F" && a === "K"){

        co = (V - 32) * (5/9) + 273.15
    }

    if(de === "K" && a === "F"){

        co = (V-273.15) * (9/5) + 32
    }


    if(de === "F" && a === "C"){

        co = (V - 32)/1.8
    }

    if(de === "K" && a === "C"){

        co = V - 273.15

    }
    if(de === "C" && a === "C"){
        
        co = V
    }

    if( de === "F" && a === "F"){

        co = V
    }

    if(de === "K" && a === "K"){

        co = V
    }

    return(co)
}


console.log(convertirTemperatura(100, "C", "F")) // -> 212
console.log(convertirTemperatura(0, "C", "K")) // -> 273.15