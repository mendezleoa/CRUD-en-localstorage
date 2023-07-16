const fichas = document.getElementById("fichas");
const form = document.querySelector("#form");
const agrandar = document.getElementById("agrandar")

agrandar.addEventListener('click', () => {
  document.getElementById("formulario").classList.toggle("activo");
  if (agrandar.classList.value === "fa-solid fa-plus acciones") {
    agrandar.classList.replace("fa-plus", "fa-minus");
  } else if (agrandar.classList.value === "fa-solid fa-minus acciones") {
    agrandar.classList.replace("fa-minus", "fa-plus");
  }
})

document.getElementById("borrar").addEventListener('click', () => {
  arraydatos = [];
  localStorage.setItem('datos', JSON.stringify(arraydatos));
  mostrarFichas()
})

const CrearItem = (nombre, cedula, departamento) => {
  if ((nombre.length > 18 || nombre.length < 4) || (cedula.length > 9 || cedula.length < 5) || (departamento.length > 32 || departamento.length < 4)) {
    alert("Información invalida.")
  } else {
    let arraydatos = JSON.parse(localStorage.getItem('datos'));
    if (arraydatos === null) {
      arraydatos = [];
    }
    let item = {
      nombre: nombre,
      cedula: cedula,
      departamento: departamento
    }
    arraydatos.push(item)
    localStorage.setItem('datos', JSON.stringify(arraydatos));
  }
}

function mostrarFichas() {
  let datos = JSON.parse(localStorage.getItem('datos'));
  if (!datos.length) {
    fichas.innerHTML = `<h3 class="mensaje">No hay datos</h3>`
  } else {
    fichas.innerHTML = ``;
    datos.forEach(dato => {
      fichas.innerHTML += `<div class="ficha">
      <h3>Nombre: ${dato.nombre}</h3>
      <h3>Cédula: CI ${dato.cedula}</h3>
      <h3>Departamento: ${dato.departamento}</h3>
    </div>`;
    });
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let cedula = document.getElementById("cedula").value;
  let departamento = document.getElementById("departamento").value;

  CrearItem(nombre, cedula, departamento);
  form.reset();
  mostrarFichas()
})

document.addEventListener('DOMContentLoaded', mostrarFichas())