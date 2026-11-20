//Suma digitos

function sumaDigitos(n){

 let suma = 0;

 while( n > 0){

    suma += n % 10
    n = Math.trunc(n/10)
    
 }
   return suma;
}

console.log(sumaDigitos(22))

//mcd (a, b)
function mcd(a,b){


    while( b !== 0){

    let temp = b;
     
    b = a % b

    a = temp;
}

return a;
   
}

console.log(mcd(48, 18)) // -> 6
console.log(mcd(12, 64)) // -> 1

// 
function aniosParaDuplicar(monto, tasa){
   
   const meta = monto*2;
   let inversion = monto;
   let años = 0;

    while(inversion < meta){
       
      inversion += inversion * (tasa/100);
      
    años++
    }

    return años;
}

console.log(aniosParaDuplicar(1000))
// -> 1
console.log(aniosParaDuplicar(500, 10))
// -> 8




