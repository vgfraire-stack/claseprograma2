const cartelera = "Clayface: 70, La leyenda del charro negro: 70, Godzilla Minus Zero: 70, Avengers Doomsday: 110, Loco Mexico Magico: 50, Coyote vs ACME: 50, Ebezner Los fantasmas de Navidad: 80";

console.log(cartelera)

let menu = 0;
let total = 0;

function carteleraNueva(cartelera) { 

let nuevaCartelera = cartelera

.split(",")
.map((s) => s.trim())

 while (menu !== 4) {

    menu = parseInt(prompt("Ingrese la opcion: " + "\n1.Ver cartelera" + "\n2.Comprar Boletos" + "\n3.Ver total" + "\n4.Salir"))

switch(menu){

    case 1: alert("La cartelera es:\n" + nuevaCartelera.join("\n"))
    break;

case 2: {
    let pelicula = prompt("Escribe el nombre de la película:").toLowerCase().trim()
    let cantidad = parseInt(prompt("¿Cuántos boletos quieres?"))
    let precio = 0;

    switch(pelicula){ 
    case "clayface": case "la leyenda del charro negro": case "godzilla minus zero" : precio= 70 
    break;
    case "avengers doomsday": precio = 110;
    break;
    case "loco mexico magico": case "coyote vs acme": precio = 50;
    break;
    case "ebezner los fantasmas de navidad": precio = 80;
    break;
    default: 
    alert("Esa película no la tenemos joven, valla al de Matamoros")
    }

    if (precio > 0 && cantidad > 0) {
        total += precio * cantidad
        alert("Agregaste " + cantidad + " boleto(s). Subtotal: $" + (precio * cantidad))
    }
    break;
    }
        
case 3: alert("Tu total es: $" + total)
 break;

case 4: alert("Has decidido salir. Total a pagar: $" + total)
break;

default: alert("Opción no válida")

        }
    }
               
return nuevaCartelera
}

let cine = carteleraNueva(cartelera)

console.log(cine)

