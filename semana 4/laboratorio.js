"use strict"
const texto  = "2024101:entrada;2024102 : Entrada;2024103:ENTRADA;;2024104:entrada ;2024101:salida;abc123:entrada;2024105:Entrada;  2024106 :entrada  ;2024102:SALIDA;2024107:baño;2024108:entrada;2024108:entrada;20241:entrada;2024109:Salida;2024110:entrada;;;2024103:salida;2024111;2024112 : ENTRADA ;20241130:entrada;2024104:salida;2024113:entrada;2024101:entrada;2024114:Comida;2024105:SALIDA ;  ;2024115:entrada;2024106:salida;2024116:entrada ;2024117:entrada;2024110:Salida;2024118:entrada;2024112:salida;2024119 :entrada;2024120:ENTRADA;2024121:entrada;2024113:SALIDA;2024122:entrada ;2024123:entrada";

function limpiarEventos(texto) {
  let partes = texto.split(";");
  let eventosLimpios = [];

  for (let i = 0; i < partes.length; i++) {
    let parte = partes[i].trim();
    if (parte === "") {
      continue;
    }

    let datos = parte.split(":");
    if (datos.length !== 2) {
      continue;
    }

    let matricula = datos[0].trim();
    let tipo = datos[1].trim().toLowerCase();

    let matriculaValida = /^\d{7}$/.test(matricula);
    let tipoValido = tipo === "entrada" || tipo === "salida";

    if (matriculaValida && tipoValido) {
      eventosLimpios.push({ matricula: matricula, tipo: tipo });
    }
  }
  return eventosLimpios;
}

// 2. Quién quedó dentro
const quienEstaDentro = function (eventos) {
  let dentro = [];

  for (let i = 0; i < eventos.length; i++) {
    let matricula = eventos[i].matricula;
    let tipo = eventos[i].tipo;
    let yaEsta = dentro.includes(matricula);

    if (tipo === "entrada" && !yaEsta) {
      dentro.push(matricula);
    }

    if (tipo === "salida" && yaEsta) {
      dentro = dentro.filter(function (m) {
        return m !== matricula;
      });
    }
  }
  return dentro;
};

// 3. Decide si puede entrar
function decidirAcceso(matricula, dentro, capacidad = 20) {
  if (!/^\d{7}$/.test(String(matricula).trim())) {
    return "matrícula inválida";
  }
  if (dentro.includes(String(matricula).trim())) {
    return "ya está dentro";
  }
  if (dentro.length >= capacidad) {
    return "laboratorio lleno";
  }
  return "acceso permitido";
}

// 4. Pregunta hasta que den una matrícula válida
function pedirMatricula(respuestas) {
  let i = 0;
  let matricula = "";

  do {
    matricula = String(respuestas[i]).trim();
    i++;
  } while (!/^\d{7}$/.test(matricula) && i < respuestas.length);

  return matricula;
}

// 5. Mapa de asientos
function mapaDeAsientos(filas, columnas, ocupados) {
  let mapa = "";
  let numero = 1;

  for (let f = 0; f < filas; f++) {
    let linea = "";
    for (let c = 0; c < columnas; c++) {
      let asiento;
      if (ocupados.includes(numero)) {
        asiento = "XX";
      } else {
        asiento = String(numero).padStart(2, "0");
      }
      linea += asiento + " ";
      numero++;
    }
    mapa += linea.trim() + "\n";
  }
  return mapa.trim();
}

console.log(decidirAcceso("abc", dentro));                 // Matrícula inválida
console.log(decidirAcceso(dentro[0], dentro));             // Ya está dentro
console.log(decidirAcceso("2099999", dentro));             // Acceso permitido
console.log(decidirAcceso("2099999", dentro, dentro.length)); // Laboratorio lleno

console.log(pedirMatricula(["", "hola", "123", "2024555", "2024666"])); // 2024555
console.log(pedirMatricula(["x", "y"]));                                // null

console.log(mapaDeAsientos(3, 4, [2, 5, 11]));