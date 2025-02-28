document.addEventListener('DOMContentLoaded', function() {
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const botaoContraste = document.getElementById('contraste');

    botaoAcessibilidade.addEventListener('click', function() {
        opcoesAcessibilidade.style.display = 
            (opcoesAcessibilidade.style.display === 'none' || opcoesAcessibilidade.style.display === '') 
            ? 'block' : 'none';
    });

    botaoContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });
});