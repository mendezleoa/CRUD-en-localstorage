const tarjetas = document.getElementById("tarjetas")

crearTarjetas()

function crearTarjetas() {
  let datos = localStorage.getItem('datos')
  if (!datos) {
    tarjetas.innerHTML = `<div>
      <h3>No hay datos</h3>
    </div>`
  } else {
    tarjetas.innerHTML = `<div>
      <h3>Si hay datos</h3>
    </div>`
  }
}