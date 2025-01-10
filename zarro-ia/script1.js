// Selecionando o formulário
const form = document.querySelector('form');

// Adicionando um evento ao formulário para quando for enviado
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar recarregamento da página

    // Pegando os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibindo um alerta com as informações do formulário
    alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.\nEmail: " + email + "\nMensagem: " + mensagem);

    // Após o envio, você pode limpar os campos do formulário (opcional)
    form.reset();
});