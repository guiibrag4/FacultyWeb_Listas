/* Crie um formulário de cadastro de cliente. O formulário deve conter os campos Nome (text), Pessoa (Física/Jurídica – radio), CPF (text), CNPJ (text), data de nascimento, endereço (text), cep (text), telefone (text), email. O formulário deve ativar o campo CPF apenas se o radio de pessoa física estiver ativo e o campo de CNPJ no caso de pessoa jurídica. O campo data de nascimento também só deve estar ativo no caso de pessoa física ser selecionado e deve aceitar que somente números sejam digitados. O campo CEP também só deve aceitar 
número. */ 

onload = function() {
    let personFisica = document.getElementById('personFisica');
    let personJuridica = document.getElementById('personJuridica');
    let cpf = document.getElementById('cpf');
    let cnpj = document.getElementById('cnpj');
    let birth = document.getElementById('birth');
    let cep = document.getElementById('cep');
    let phone = document.getElementById('phone');

    cpf.disabled = true;
    cnpj.disabled = true;	

    personFisica.addEventListener('click', function () {
        cpf.disabled = false;
        cnpj.disabled = true;
        birth.disabled = false;
    });

    personJuridica.addEventListener('click', function () {
        cpf.disabled = true;
        cnpj.disabled = false;
        birth.disabled = true;
    });

    // q: O que o método replace faz? Dê exemplos.
    // a: O método replace substitui uma substring de uma string por outra substring. Por exemplo, a expressão 'Hello, World!'.replace('World', 'Mundo') resulta em 'Hello, Mundo!'.

    // q: Me explique melhor sobre as espressões regulares e dê exemplos.
    // a: Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Por exemplo, a expressão regular /\d/ seleciona qualquer caractere que seja um dígito, e a expressão regular /\D/ seleciona qualquer caractere que não seja um dígito

    cep.addEventListener('input', function (e) {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");
        e.target.value = value;
    });
    
    phone.addEventListener('input', function (e) {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");
        e.target.value = value;
    });
}