const botao = document.getElementById("btn-boas-vindas");
const mensagem = document.getElementById("mensagem-status");
botao.addEventListener("click",() =>{
    mensagem.textContent = "Módulo de JavaScript ativado com sucesso!"
});