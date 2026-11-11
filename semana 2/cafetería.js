//Registro original
const registro = "Café: 35.50; té verde : 28 ;Pan Dulce:18.5; CAFÉ:35.5;; galleta de avena: 22.10;  Té Verde:28 ; Jugo de naranja: 40; pan dulce : 18.50; Café Americano: abc; galleta de avena:22.1; ;Jugo de Naranja:40 ; Sándwich:55.75; té verde: -10; :15; Pan dulce:18.5; Café :35.5 ; Sándwich : 55.75 ; galleta de avena:";

console.log(registro)

//Aquí se limpia el registro
function nuevoRegistro(registro){
 
    let limpiarRegistro =registro.normalize("NFD").replace(/[\u0300-\u036f]/g, "") .split(";").map((p) => p.toLowerCase().trim()).filter((p) => p !== "")


    return limpiarRegistro;

}

let Registronuevo = nuevoRegistro(registro)
console.log(Registronuevo)

const sumarRegistro = Registronuevo;

//Suma de todos los precios
function suma(...sumarRegistro){
             
    sumarRegistro = sumarRegistro.map((p) => p.split(":")[1]).map((p) => Number(p)).filter((p) => !isNaN(p) && p > 0);

    return sumarRegistro.reduce((a, b) => a + b, 0);
    
}

let precios = suma(...sumarRegistro)
precios = parseFloat(precios.toFixed(2))

console.log(precios)

//Se acomoda del ingreso mayor a menor y si queda empate se acomoda de A a la Z

const ventas = Registronuevo.sort((a, b) => (Number(b.split(":")[1]) - Number(a.split(":")[1])) || a.split(":")[0].localeCompare(b.split(":")[0]));

const resumenPorProducto = (ventas) => {

    const validas = ventas.map((p) => p.split(":")).filter((p) => p[0].trim() !== "" && Number(p[1]) > 0)

    const productos = [...new Set(validas.map((p) => p[0].trim()))]

    return productos.map((producto) => {

        const compras = validas.filter((p) => p[0].trim() === producto)

        return { producto, veces: compras.length, ingreso: parseFloat(compras.reduce((a, p) => a + Number(p[1]), 0).toFixed(2)) }

    }).sort((a, b) => (b.ingreso - a.ingreso) || a.producto.localeCompare(b.producto, "es"))

}

const resumen = resumenPorProducto(ventas)

console.log(resumen)

//Se aplica descuento
const descuento = (precio, porcentaje = 15) => precio - (precio * porcentaje) / 100

const aplicarATodos = (lista, fn) => lista.map((p) => fn(p))

const conDescuento = aplicarATodos(resumen.map((p) => p.ingreso), descuento)

console.log(conDescuento)

//Se escoge algun objeto al azar para el descuento del día
const productoAlAzar = (ventas) => ventas[Math.floor(Math.random() * ventas.length)].producto

const promocion = productoAlAzar(resumen)

// Reporte Final
console.log("===== REPORTE FINAL =====")

resumen.forEach((p, i) => {
    console.log(`${p.producto}: ${p.veces} venta(s), Ingreso: $${p.ingreso.toFixed(2)}, Con 15% de descuento: $${conDescuento[i].toFixed(2)}`)
})

console.log(`Total: $${precios.toFixed(2)}`)
console.log(`Producto de la promoción: ${promocion}`)