const express = require ('express')
const path = require('path')

__dirname = path.resolve();

var bodyParser = require ('body-parser');
const app = express();     

app.use(bodyParser.urlencoded({extended: false}));

app.engine('html', require('ejs').renderFile);

//Acessar o endereço raiz
app.get("/", function (req, res) {
    res.render(__dirname + "/view/index.html");
  });

//Ao acessar o endereço '/cadastro' entra nesse método
//O link e o próprio link, nesse projeto, vai pelo método get
app.get("/cadastro", function (req, res) {
	res.render(__dirname + "/view/formulario.html");
});

//Após clicar no botão de enviar com o método post. 
app.post("/cadastro", (req, res) => {
    let idade = 2024 - req.body.dataNasc;
    res.render(__dirname + "/view/boas-vindas.html", {nome: req.body.nome, idade: idade, cor: req.body.cor});
});

app.get("/contato", (req, res) => {
	res.render(__dirname + "/view/contato-empresa.html");
});

app.get("/sobre", (req, res) => {
  res.render(__dirname + "/view/empresa-sobre.html");
});

//Inicia um servidor express e escuta as conexões na porta 3000, usado 2 parâmetros. O primeiro é a porta e o segundo é uma função de callback (retorna o console.log)
app.listen (process.env.PORT || 3000, () => {  
console.log(`Running at Port ${process.env.PORT || 3000}`)
});

//netstat -ano | findstr :3000
//taskkill /PID 1515 /F
