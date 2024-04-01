const button = document.getElementById('button');
const p = document.getElementById('Ocultar/Mostrar')

function ocultarBotao () {
    if (p.style.display === 'none') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    } 
}

button.addEventListener('click', ocultarBotao);

