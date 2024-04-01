// q: O que faz o método push?
// a: O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

// q: Explique passo a passo
// a: O método inverter() cria um array vazio chamado nomes e adiciona os valores dos inputs com id nome1, nome2, nome3, nome4 e nome5. Em seguida, os valores dos inputs são alterados para os valores do array nomes, mas na ordem inversa.

/* Exemplo: nome1 = letícia  (posição 0 do array), nome2 = Pedro (posição 1 do array). Na segunda parte, nome1 é colocado na última posição do array e nome2 é colocado na penúltima. Ao clicar no botão que chama a função inverter(), os nomes são invertidos de lugar.*/

function inverter() {
	let nomes = [];
	nomes.push(document.getElementById("nome1").value);
	nomes.push(document.getElementById("nome2").value);
	nomes.push(document.getElementById("nome3").value);
	nomes.push(document.getElementById("nome4").value);
	nomes.push(document.getElementById("nome5").value);

	document.getElementById("nome1").value = nomes[4];
	document.getElementById("nome2").value = nomes[3];
	document.getElementById("nome3").value = nomes[2];
	document.getElementById("nome4").value = nomes[1];
	document.getElementById("nome5").value = nomes[0];
}
