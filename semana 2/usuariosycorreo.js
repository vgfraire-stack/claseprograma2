const usuario = prompt("Agrega tu usuario: ");
const correo = prompt("Agrega tu correo: ");

function crearUsuario(usuario) {

  let usuarioLimpio = usuario.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  if (/\d/.test(usuarioLimpio)) {
    alert("No debe llevar números");
    return null;
  }

  return usuarioLimpio;
}

let usuarioNuevo = crearUsuario(usuario);

function crearCorreo(correo) {

  let correoLimpio = correo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  if (!correoLimpio.includes("@")) {
    alert("El correo debe incluir @");
    return null;
  }

  return correoLimpio;
}

let correoNuevo = crearCorreo(correo);

console.log(usuarioNuevo);
console.log(correoNuevo);