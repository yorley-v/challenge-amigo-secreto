const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const resetButton = document.getElementById('resetButton');

function agregarAmigo() {
  if (!inputAmigo.value) {
    alert("Por favor, inserte un nombre");
  } else if (listaAmigos.includes(inputAmigo.value)) {
    alert("Este nombre ya está en la lista. Por favor, ingresa otro nombre.");
  } else {
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = ""; // Limpiar el campo de input
  }
}

inputAmigo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    ulResultado.innerHTML = "No hay amigos en la lista. Agrega algunos primero.";
    return;
  }

  // Crear una copia de la lista de amigos
  const amigosRestantes = [...listaAmigos];

  // Seleccionar un amigo aleatorio de la lista de amigos restantes
  const random = Math.floor(Math.random() * amigosRestantes.length);
  const amigoSecreto = amigosRestantes[random];

  // Eliminar el amigo seleccionado de la lista de amigos restantes
  amigosRestantes.splice(random, 1);

  // Actualizar la lista de amigos
  listaAmigos.splice(listaAmigos.indexOf(amigoSecreto), 1);

  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

function resetGame() {
  // Limpiar la lista de amigos
  listaAmigos.length = 0;
  ulListaAmigos.innerHTML = "";

  // Limpiar el resultado
  ulResultado.innerHTML = "";
}

resetButton.addEventListener('click', resetGame);