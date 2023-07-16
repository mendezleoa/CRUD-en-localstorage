const fichas = document.getElementById("fichas");
const form = document.querySelector("#form");

document.getElementById("agregar").addEventListener('click', () => {
  document.getElementById("formulario").classList.toggle("activo");
})

let arraydatos = [];

const CrearItem = (nombre, cedula, departamento) => {
  if ((nombre.length > 18 || nombre.length < 4) || (cedula.length > 9 || cedula.length < 5) || (departamento.length > 32 || departamento.length < 4)) {
    alert("Información invalida.")
  } else {
    let item = {
      nombre: nombre,
      cedula: cedula,
      departamento: departamento
    }
    arraydatos.push(item)
    localStorage.setItem('datos', JSON.stringify(arraydatos));
  }
}

// crearFichas();

function crearFichas() {
  let datos = localStorage.getItem('datos');
  if (!datos) {
    fichas.innerHTML = `<div class="mensaje">
      <h3>No hay datos</h3>
    </div>`
  } else {
    fichas.innerHTML = `<div>
      <h3>Si hay datos</h3>
    </div>`;
    datos.forEach(dato => {
      fichas.innerHTML += `<div>
      <h3>${dato}</h3>
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
})