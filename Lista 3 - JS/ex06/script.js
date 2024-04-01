// q: O que faz o método split()?
// a: O método split() divide um objeto String em um array de strings ao separar a string em substrings.

// q: Por que dentro do método split tem um '' e o que aconteceria se não tivesse? Qual a consequência disso?




// q: Como seria um array de strings?
// a: ['a', 'b', 'c']

// q: O que faz o método reverse()?
// a: O método reverse() inverte a ordem dos elementos de um array.

// q: O que faz o método join()?
// a: O método join() junta todos os elementos de um array em uma string.

function validacao(event) {
    event.preventDefault();
    let palavra = document.getElementById('palavra').value;
    let palavraInvertida = palavra.split('').reverse().join('');
    if (palavra === palavraInvertida) {
        alert('A palavra ' + palavra + ' É um palíndromo!');
    } else {
        alert('A palavra ' + palavra + ' NÃO é um palíndromo!');
    }
}