const botao = document.getElementsByClassName("button")

botao[0].addEventListener("click",(e)=>{
    if(e.target == botao[0]){
        window.location.href = "./2-tela-selecao/index.html"
    }
})
botao[1].addEventListener("click",(e)=>{
    if(e.target == botao[1]){
        window.location.href = "./2.1-tela-tutorial/index.html"
    }
})
botao[2].addEventListener("click",(e)=>{
    if(e.target == botao[2]){
        window.location.href = "./2.2-tela-configuracoes/index.html"
    }
})