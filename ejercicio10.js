
const tabla = document.createElement('table');
tabla.id = 'tabla';

const encabezado = tabla.createTHead();
const encabezadoFila = encabezado.insertRow();

const encabezados = ['Nombre', 'Apellido', 'Email', 'Nombre de la empresa', 'Dirección'];

encabezados.forEach(encabezadoTexto => {
  const th = document.createElement('th');
  th.textContent = encabezadoTexto;
  encabezadoFila.appendChild(th);
});

document.body.appendChild(tabla);

// Obtener datos de la API y completar la tabla
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const cuerpo = tabla.createTBody();

    data.forEach(usuario => {
      const fila = cuerpo.insertRow();

      const celdaNombre = fila.insertCell();
      celdaNombre.textContent = usuario.name;

      const celdaApellido = fila.insertCell();
      celdaApellido.textContent = usuario.username;

      const celdaEmail = fila.insertCell();
      celdaEmail.textContent = usuario.email;

      const celdaEmpresa = fila.insertCell();
      celdaEmpresa.textContent = usuario.company.name;

      const celdaDireccion = fila.insertCell();
      celdaDireccion.textContent = usuario.address.street + ', ' + usuario.address.suite + ', ' + usuario.address.city;
    });
  })
  .catch(error => console.error('Error:', error));
  