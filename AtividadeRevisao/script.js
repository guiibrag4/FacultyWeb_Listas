/*Criando variáveis para guardar os elementos do HTML e conseguir
manimulá-los melhor ao longo do código */
let resultado = document.getElementById("Resultado");
let indicador = document.getElementById("Indicador");
let input = document.getElementById("Input");
const jogar = document.getElementById("jogarButton");
const novoJogo = document.getElementById("começarButton");

//Gerador de números aleatórios de 0 a 100
let numeroRandomico = Math.floor(Math.random() * 100) + 1;

//Iniciando o jogo
resultado.innerHTML = "Escolha um número entre 0 e 100";
indicador.innerHTML = "";
input.value = "";
resultado.style.backgroundColor = "yellow";
resultado.style.border = "2px solid #D08884";
resultado.style.fontFamily = "PixelFont";

//Adicionando o contador
let errosConsecutivosElement = document.getElementById("errosConsecutivos");
let errosConsecutivos = 0;

//Função bem intuitiva kkkk, verifica o palpite do jogador
function verificarPalpite() {
	let palpiteUsuario = input.value;

	if (palpiteUsuario == numeroRandomico) {
		resultado.style.backgroundColor = "#D4E8D4";
		resultado.style.border = "2px solid #A5C893";

		resultado.innerHTML = "Você acertouu";

		errosConsecutivos = 0;
		errosConsecutivosElement.textContent = "Erros: " + errosConsecutivos;

        
		input.disabled = true;
		jogar.disabled = true;
	} else {
		resultado.style.backgroundColor = "#F7CDCB";
		resultado.style.border = "2px solid #D08884";

		resultado.innerHTML = "Você errou";

		errosConsecutivos++;
		errosConsecutivosElement.textContent =
			"Você possui " +
			(10 - errosConsecutivos) +
			" tentativas. Erros: " +
			errosConsecutivos;

		if (errosConsecutivos >= 10) {
			resultado.innerHTML = "Você perdeu! O número era: " + numeroRandomico;
			resultado.style.backgroundColor = "red";

			input.disabled = true;
			jogar.disabled = true;
		}
	}

	//Tratamento do indicador, caso o usuário erre o número ou acerte
	if (palpiteUsuario > numeroRandomico) {
		indicador.innerHTML = "Tente um número menor";
	} else if (palpiteUsuario < numeroRandomico) {
		indicador.innerHTML = "Tente um número maior";
	} else {
		indicador.innerHTML = "Mandou bem demaais!!";
	}
}

//funcão do botão de "Começar novo jogo"
function resetGame() {
	input.disabled = false;
	jogar.disabled = false;

	numeroRandomico = Math.floor(Math.random() * 100) + 1;
	resultado.innerHTML = "Escolha um número entre 0 e 100";
	indicador.innerHTML = "";
	input.value = "";
	resultado.style.backgroundColor = "yellow";
	resultado.style.border = "2px solid #D08884";
	errosConsecutivos = 0;
	errosConsecutivosElement.innerHTML = "Erros: 0";
}

//Interação dos botões
jogar.addEventListener("click", verificarPalpite);
input.addEventListener("keypress", function (event) {
	if (event.keyCode === 13) {
		verificarPalpite();
	}
});
novoJogo.addEventListener("click", resetGame);
