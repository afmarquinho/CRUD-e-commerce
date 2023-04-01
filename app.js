//CONSTANTES
const resultado = document.querySelector(".section__container");
const btnAgregar = document.querySelector(".btn__agregar");
const formulario = document.querySelector(".formulario");
const btnEditar = document.querySelector(".btn__editar");
const btnEliminar = document.querySelector(".btn__eliminar");

// EVENTOS

document.addEventListener("DOMContentLoaded", () => {
  agregarHTML(inventarioBBDD);
});

// OBJETO PARA CAPTURAR FORMULARIO

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = formulario.querySelector(".nombre").value;
  const precio = formulario.querySelector(".precio").value;
  const descripcion = formulario.querySelector(".descripcion").value;
  const img = formulario.querySelector(".img").value;

  const nuevoProducto = { nombre, precio, descripcion, img };
  // Validar que el objeto no tenga valores vacíos
  let objetoCompleto = true;
  for (let propiedad in nuevoProducto) {
    if (nuevoProducto[propiedad] === "") {
      objetoCompleto = false;
      break;
    }
  }
  if (objetoCompleto) {
    inventarioBBDD = [...inventarioBBDD, nuevoProducto];
    agregarHTML(inventarioBBDD);
  } else {
    alert("Por favor, complete todos los campos del formulario.");
  }
  formulario.reset(); //borrar el contenido de los inputs
});

// FUNCIONES
function agregarHTML(bbdd) {
  limpiarHTML();

  bbdd.forEach((inventario, index) => {
    const { nombre, descripcion, precio, img } = inventario;

    const nombreHTML = document.createElement("H3");
    nombreHTML.textContent = `${nombre}`;
    nombreHTML.classList.add("nombre", "text__center");

    const imageHTML = document.createElement("IMG");
    imageHTML.src = `${img}`;
    imageHTML.alt = `imagen aquí`;
    imageHTML.classList.add("imagen");

    const descHTML = document.createElement("P");
    descHTML.textContent = `${descripcion}`;
    descHTML.classList.add("desc");

    const precioHTML = document.createElement("H4");
    precioHTML.textContent = `${precio} USD`;
    precioHTML.classList.add("precio");

    const info = document.createElement("DIV");
    info.classList.add("info");
    info.appendChild(descHTML);
    info.appendChild(precioHTML);

    const btnEditar = document.createElement("BUTTON");
    btnEditar.textContent = "EDITAR";
    btnEditar.type = "button";
    btnEditar.classList.add("btn__editar");
    btnEditar.dataset.index = index;

    const btnEliminar = document.createElement("BUTTON");
    btnEliminar.textContent = "ELIMINAR";
    btnEliminar.type = "button";
    btnEliminar.classList.add("btn__eliminar");

    const botones__contenedor = document.createElement("DIV");
    botones__contenedor.classList.add("botones__contenedor");
    botones__contenedor.appendChild(btnEditar);
    botones__contenedor.appendChild(btnEliminar);

    const pastelHTML = document.createElement("DIV");
    pastelHTML.classList.add("pastel__container");

    pastelHTML.appendChild(nombreHTML);
    pastelHTML.appendChild(imageHTML);
    pastelHTML.appendChild(info);
    pastelHTML.appendChild(botones__contenedor);

    resultado.appendChild(pastelHTML);

    // Listener de eventos para el botón "Editar"
    btnEditar.addEventListener("click", () => {
      formulario.querySelector(".nombre").value = nombre;
      formulario.querySelector(".precio").value = precio;
      formulario.querySelector(".descripcion").value = descripcion;
      formulario.querySelector(".img").value = img;
      formulario.dataset.index = index;
      btnAgregar.textContent = "EDITAR";
    });
    btnAgregar.textContent = "AGREGAR";
  });
}
// LIMPIAR EL HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
