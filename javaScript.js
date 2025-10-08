const corpoPagina = document.body;
const botaoAlterar = document.getElementById('alternar-tema');

function alterarTema(){

    // .toggle adiciona a classe se ela não estiver no <body>
    if (corpoPagina.classList.toggle('dark-mode')){ 

        botaoAlterar.textContent = "Desativar Modo Escuro";
    } else {
        botaoAlterar.textContent = "Ativar Modo Escuro";
    }
}

botaoAlterar.addEventListener('click', alterarTema);
