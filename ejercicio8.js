const tabla = document.getElementById('tablaPersonas');
const datosPersonas = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    sexo: 'Masculino',
    telefono: '1234567890'
  },
  {
    nombre: 'María',
    apellido: 'González',
    edad: 28,
    sexo: 'Femenino',
    telefono: '9876543210'
  },
  
];

datosPersonas.forEach(persona => {
  const fila = tabla.insertRow();
  const celdaNombre = fila.insertCell(0);
  const celdaApellido = fila.insertCell(1);
  const celdaEdad = fila.insertCell(2);
  const celdaSexo = fila.insertCell(3);
  const celdaTelefono = fila.insertCell(4);

  celdaNombre.textContent = persona.nombre;
  celdaApellido.textContent = persona.apellido;
  celdaEdad.textContent = persona.edad;
  celdaSexo.textContent = persona.sexo;
  celdaTelefono.textContent = persona.telefono;
});
