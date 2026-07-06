const urlAPI = "https://script.google.com/macros/s/AKfycby7M-xegIqepPcdn14ZI20CLEco6apxWf3BQjn4bHOU6SZrf6I2HYh5YqbR4PTgba2e/exec";

document.getElementById('formImobiliaria').addEventListener('submit', function(event) {
    event.preventDefault();

    const botao = event.target.querySelector('button');
    botao.innerText = "A processar pedido...";
    botao.disabled = true;

    const dados = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telemovel: document.getElementById('telemovel').value,
        prazo: document.getElementById('prazo').value,
        mensagem: document.getElementById('mensagem').value
    };

    fetch(urlAPI, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(() => {
        alert('Obrigado! Um consultor Horizon Residences entrará em contacto em breve.');
        event.target.reset();
        botao.innerText = "Solicitar Informações adicionais";
        botao.disabled = false;
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro. Tente novamente.');
        botao.innerText = "Solicitar Informações adicionais";
        botao.disabled = false;
    });
});