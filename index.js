const calcular = document.getElementById('calcular');

function jurosComposto() {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const tempo = document.getElementById('tempo').value;
    const taxaJuros = (document.getElementById('taxa').value) / 100;
    const resultado = document.getElementById('resultado');

    if (valor !== '' && taxaJuros !== '' && nome !== '' && tempo !== '') {
        const valorFuturo = valor * (((1 + taxaJuros) ** tempo - 1) / taxaJuros).toFixed(2);

        message.textContent = `${nome}, se você aplicar ${valor}, à taxa de juros de ${taxaJuros}, durante ${tempo}, você acomulara R$ ${valorFuturo}`;
    }
    else {
        resultado.textContent = 'Para calcular o seu valor futuro a ser poupado, preencha todos os campos.';
    }
}

function limparInputs() {

    document.getElementById('nome').value = ' ';
    document.getElementById('valor').value = ' ';
    document.getElementById('tempo').value = ' ';
    document.getElementById('taxa').value = ' ';
    document.getElementById('resultado').value = ' ';


}