// contar vocales
let txt = prompt("Ingrese una palabra")

let mini = txt.toLowerCase().normalize("NFD");
let vocal1 = mini.split("a")
let vocal2 = mini.split("e")
let vocal3 = mini.split("i")
let vocal4 = mini.split("u")
let vocal5 = mini.split("o")


let vocales = vocal1.length-1 + vocal2.length-1 + vocal3.length-1 + vocal4.length-1 + vocal5.length-1

console.log(mini)
console.log(vocales)

//Palindromo

const palin = prompt("Ingrese un palindromo: ")

let palin1 = palin.toLowerCase().trim().normalize("NFD").replace(/\s/g, "")

let palin2 = palin1.split("").reverse().join("")

if(palin2 === palin1){

    console.log("Si es un palindromo")

}
else{
    console.log("No es un palindromo lea bien")
}
