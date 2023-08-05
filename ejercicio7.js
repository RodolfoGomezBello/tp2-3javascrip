
const toggleButton = document.getElementById('toggleButton');
const miDiv = document.getElementById('miDiv');

toggleButton.addEventListener('click', () => {
  if (miDiv.classList.contains('oculto')) {
    miDiv.classList.remove('oculto');
  } else {
    miDiv.classList.add('oculto');
  }
});