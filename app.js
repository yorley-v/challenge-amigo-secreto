const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const resetButton = document.getElementById('resetButton');

function agregarAmigo() {
  const nuevoAmigo = inputAmigo.value.trim();
  if (!nuevoAmigo) {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  const nombreEnMayusculas = nuevoAmigo.toUpperCase();
  if (listaAmigos.some(amigo => amigo.toUpperCase() === nombreEnMayusculas)) {
    alert("Este nombre ya está en la lista. Por favor, ingresa otro nombre.");
    return;
  }
  listaAmigos.push(nuevoAmigo);
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nuevoAmigo;
  ulListaAmigos.appendChild(nuevoElemento);
  inputAmigo.value = ""; // Limpiar el campo de entrada
}

inputAmigo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

function invertirNombre(nombre) {
  return nombre.split('').reverse().join('');
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    ulResultado.textContent = "Necesitas al menos 2 amigos en la lista para poder sortear.";
    return;
  }
  const amigosRestantes = [...listaAmigos];
  const random = Math.floor(Math.random() * amigosRestantes.length);
  const amigoSecreto = amigosRestantes[random];
  amigosRestantes.splice(random, 1);
  listaAmigos.splice(listaAmigos.indexOf(amigoSecreto), 1);
  ulResultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}

function resetGame() {
  if (confirm("¿Estás seguro de que quieres borrar la lista de amigos?")) {
    listaAmigos.length = 0;
    ulListaAmigos.innerHTML = "";
    ulResultado.textContent = "";
    inputAmigo.value = ""; // Limpiar el campo de entrada
  }
}

resetButton.addEventListener('click', resetGame);