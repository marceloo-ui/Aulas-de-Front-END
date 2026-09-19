let botao = document.getElementById("meuBotao")
let mensagem = document.getElementById("mensagem")
botao.addEventListener("click",
    function(){
        mensagem.innerHTML = "Você clicou no botao"
    };
)