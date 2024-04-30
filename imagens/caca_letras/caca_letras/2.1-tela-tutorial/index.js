const voltar = document.getElementById("voltar")

voltar.addEventListener("click",(e)=>{
    if(e.target == voltar){
        window.location.href = "../index.html"
    }
})