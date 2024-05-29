// Requerindo os módulos, ou seja, importando as bibliotecas necessárias para o projeto
const express = require ('express')
const path = require ('path')

// Definindo a constante __dirname que recebe o caminho absoluto do diretório atual
__dirname = path.resolve();

// Criando as aplicações e colocando dentro das variaveis
const app = express();
var bodyParser = require('body-parser');

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.engine('html', require('ejs').renderFile);
/* app.engine(ext, callback): Este é um método do Express.js que define o mecanismo de visualização para um tipo específico de arquivo. Neste caso, está definindo o mecanismo de visualização para arquivos .html.

'html': Este é o primeiro parâmetro para app.engine(). Ele especifica a extensão dos arquivos para os quais o mecanismo de visualização deve ser usado. Neste caso, o mecanismo de visualização será usado para arquivos .html.

require('ejs').renderFile: Este é o segundo parâmetro para app.engine(). Ele é uma função que o Express.js usará para renderizar arquivos .html. require('ejs') importa o módulo EJS, e .renderFile é um método do EJS que lê um arquivo, processa seu conteúdo como EJS, e retorna o HTML resultante.

Portanto, o que essa linha de código está fazendo é dizer ao Express.js para usar o EJS para renderizar arquivos .html. Isso significa que você pode usar a sintaxe EJS em seus arquivos .html, e quando o Express.js os renderizar, ele processará essa sintaxe EJS e substituirá por HTML. 

O que é o EJS? Veja:

EJS, ou Embedded JavaScript, é uma biblioteca de templates para JavaScript. Ele permite que você gere HTML dinamicamente usando JavaScript de uma maneira fácil e limpa.

Com EJS, você pode criar páginas HTML que têm partes variáveis. Essas partes são preenchidas usando dados que são passados para o template. Você pode pensar nisso como uma maneira de criar páginas HTML que são personalizadas para cada usuário ou situação.

Por exemplo, você pode ter um template de página de perfil de usuário que mostra o nome do usuário, a foto do perfil e os posts do usuário. Cada vez que essa página é carregada para um usuário diferente, o EJS preenche o template com os dados desse usuário específico.
*/

app.get("/", function (req, res){
    res.render(__dirname + '/view/index.html')
});

app.post('/jogar', (req, res) => {
    const { escolha, numero } = req.body;
    const randomNum = Math.floor(Math.random() * 11);
    const soma = randomNum + numero;
    const resultado = soma % 2 == 0 ? 'par' : 'ímpar';

    if (resultado === escolha) {
        res.json({ message: 'Você ganhou!'});
    } else {
        res.json({ message: 'Você perdeu! o número era'} + resultado);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});