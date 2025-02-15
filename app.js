let amigos = []
let listaAmigos = document.getElementById('listaAmigos');

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto; 
}

function agregarAmigo() {
    alert ('¡Hola, has hecho click en el botón!');
}

asignarTextoElemento('h1', 'Juego del Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
