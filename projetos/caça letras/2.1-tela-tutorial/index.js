const voltar = document.getElementById("voltar")

voltar.addEventListener("click",(e)=>{
    if(e.target == voltar){
        window.location.href = "../1-tela-inicial/index.html"
    }
})