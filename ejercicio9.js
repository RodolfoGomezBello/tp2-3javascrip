const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  console.log('Nombre:', nombre);
  console.log('Email:', email);
});
