
const boton = document.getElementById('Super_Boton');

function cambiarColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const nuevoColor = `rgb(${red}, ${green}, ${blue})`;
  boton.style.backgroundColor = nuevoColor;
}

boton.addEventListener('click', cambiarColor);
