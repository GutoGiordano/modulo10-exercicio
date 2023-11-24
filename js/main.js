$(document).ready(function(){
    $('#telefone').mask('(00) 0 0000-0000', {
        placeholder: '(00) 0 0000-0000'
    });

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });

    $('#cep').mask('00.000-000', {
        placeholder: '00.000-000'
    });
});

$('form').on('submit', function(event) { //Evitando que o formulário carregue//
    event.preventDefault();

    $(this).validate({ //Validando o formulário//
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            numero: {
                required: true
            },
            complemento: {
                required: true
            },
            cidade: {
                required: true
            },
            bairro: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {//Alterando as mensagens de alerta do formulário
            nome: 'Por favor, insira o seu nome!',
            email: 'Por favor, insira um e-mail válido!',
            cep: 'Por favor, insira o cep corretamente!'
        },
    });
    if ($(this).valid()) {
        alert('Cadastrado com sucesso')
    }
});

