const div = document.getElementById("bloco-tarefas");
const div2 = document.getElementById("bloco-imagens");
let qntTarefas = 0;
let cont = 0;
function clicar() {
  const img = document.createElement("img");
  img.setAttribute("src", "images/pipi.jpg");
  img.classList.add("img");
  div2.appendChild(img);
  cont += 1;
}
function reset() {
  let imgs = document.getElementsByClassName("img")[cont - 1];
  div2.removeChild(imgs);
  cont--;
}

function criarTarefa() {
  const input = document.getElementById("tarefa");
  const conteudoTarefa = input.value.trim();
  if (conteudoTarefa !== "") {
    input.value = "";
    if (qntTarefas == 0) {
      const ul = document.createElement("ul");
      ul.setAttribute("id", "lista-tarefas");
      div.appendChild(ul)
    }
    const divLi = document.createElement('div')
    divLi.classList.add("divLi")
    const ul = document.getElementById("lista-tarefas");
    const li = document.createElement("li");
    li.textContent = conteudoTarefa;
    li.classList.add("tarefas-style");

    //concluir tarefa
    li.addEventListener("click", () => {
      concluirTarefa(li);
    });

    //criando o X
    const img = document.createElement("img");
    img.setAttribute("src", "assets/X.png");
    img.classList.add("x-invisivel");
    divLi.addEventListener("mouseenter", ()=>{
        aparecerX(img)
    })
    divLi.addEventListener("mouseleave", ()=>{
      desaparecerX(img)
  })
    img.addEventListener("click", () => {
      excluirTarefa(li);
    });

    //adicionando a img no li
    li.appendChild(img);

    //adicionando o li ao ul
    divLi.appendChild(li)
    ul.appendChild(divLi);
    qntTarefas += 1;
  }
}

function concluirTarefa(li) {
  li.classList.toggle("concluida");
}
function excluirTarefa(li) {
  if (qntTarefas == 1) {
    const ul = document.getElementById("lista-tarefas");
    div.removeChild(ul);
    qntTarefas -= 1;
  } else {
    li.remove();
    qntTarefas -= 1;
  }
}
function aparecerX(img){
  img.classList.add("x-aparecer")
}
function desaparecerX(img){
  img.classList.remove("x-aparecer")
}