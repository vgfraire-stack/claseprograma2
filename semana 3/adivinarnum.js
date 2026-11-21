//pedirNumero(respuestas)
let numeros;

    do{
        numeros = parseInt(prompt("Ingrese un número del 1 al 10:"))
    }
    while(numeros < 1 || numeros > 10);

//adivinar(secreto)

function adivinar(secreto){

    let bajo = 1;
    let alto = 100;
    let intentos = 0;
    let intento = 0;

    while(intento !== secreto) {
        intento = Math.floor((bajo + alto) / 2); // prueba el número de en medio
        intentos++;

        if(intento < secreto) {
        console.log(`Intento ${intentos}: rango ${bajo}-${alto}, prueba ${intento} -> es mayor`);
        bajo = intento + 1; // descarta la mita de abajo
        } else if (intento > secreto){
         console.log(`Intento ${intentos}: rango ${bajo}-${alto}, prueba ${intento} -> es menor`);
         alto = intento - 1; // descarta la mitad de arriba
        }else{
            console.log(`Intento ${intentos}: rango ${bajo}- ${alto}, prueba ${intento} -> ¡Le atinasteeeeeeeee!`);
        }
    }
    return intentos;
}

console.log("Intentos: ", adivinar(27))

