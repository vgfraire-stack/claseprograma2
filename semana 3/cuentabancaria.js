let saldo = parseInt(prompt("Ingrese saldo: "));

function depositar(){
    let saldo2 = parseInt(prompt("Agregue lo que va a depositar: "))
    return saldo2;
}

let nuevosaldo = depositar();

let consultar = saldo + nuevosaldo;

function retirar(){
    let saldo3 = parseInt(prompt("Agregue lo que va a retirar"));

    return saldo3;
}

let menos = retirar()


if(menos > consultar){

    console.log("No hay saldo suficiente")
}
else {


let consultar2 = consultar - menos;

console.log(saldo)
console.log(consultar)
console.log(consultar2)

}

/*La variable saldo en mi código esta fuera de las funcionas ya que en este caso es la variable principal, pero para manejarla según cada acción en la función depositar creo una variable llamada saldo 2 
en este caso sería lo que se le va a sumar al saldo principal dicha variable solo vive dentro de la función depositar por lo que creo una variable que guarde la función y su funcionamiento llamado nuevosaldo 
y para sumarlo al actual creo uno llamado consultar, despues creo una tercera variable llamada saldo3 que en este caso va a restar al saldo actual, esta variable la guardo en la funcion retirar y luego dicha 
funcion la asigno a una variable llamada menos y aquí se crea la condición de que si menos es mayor a consultar que en este caso sería el saldo actual muestre el mensaje de que no hay saldo suficiente, si no
ejecuta las 3 acciones sin problema, en mi porgrama de afuerzas te muestra la pregunta del saldo actual, cuanto vas a depositar y cuanto vas a retirar por lo que si se quiere omitir uno se le tendria que dar el valor de cero*/
