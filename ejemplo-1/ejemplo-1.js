var title= document.querySelector('h1');
title.addEventListener('click', updateName);

function updateName() {
    var name= prompt('Nombre del juegador');
    title.textContent = 'Jugardor 1: ' + name;
}