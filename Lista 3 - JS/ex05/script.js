/* 

Entendendendo a função

A função validacao(event) é chamada quando o formulário é submetido. Ela pega os valores dos campos de senha e confirmação de senha e verifica se são iguais. Se não forem, exibe um alerta e previne o envio do formulário. Se forem iguais, a função verifica se a senha tem entre 6 e 10 caracteres. Se não tiver, exibe um alerta e previne o envio do formulário. Além disso, esse 'submit' é adicionado ao formulário, para que a função seja chamada quando o formulário for submetido e o event seja passado como parâmetro. 
*/




document.getElementById('form').addEventListener('submit', function validacao (event){
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("confirm").value;
    if (password != passwordConfirm){
        alert("Senhas diferentes, insira senhas iguais");
        event.preventDefault();
    } else if (password.length < 6 || password.length > 10){
        alert("Senha deve ter entre 6 e 10 caracteres");
        event.preventDefault();
    }
});