let mate = parseInt(prompt("Ingrese la primera calificacion: "))
let fisica = parseInt(prompt("Ingrese la segunda calificación: "))
let artes = parseInt(prompt("Ingrese la tercera calificación: "))

let calificaciones = parseInt([mate + fisica +artes]);

let final = calificaciones/3

if(final >= 7){

    console.log("Felicidades aprobaste la materia");
}
else{
    console.log("Reprobaste la materia" );

  
}


console.log(final.toFixed(2));




