const div = document.getElementById("bloco-tarefas");
let qntTarefas = 0;
let cont = 0;
const div2 = document.getElementById("bloco-imagens");
function clicar() {
  const img = document.createElement("img");
  img.setAttribute("src", "pipi.jpg");
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
  const conteudoTarefa = input.value;
  input.value = "";

  if (qntTarefas == 0) {
    const ul = document.createElement("ul");
    ul.setAttribute("id", "lista-tarefas");
    const li = document.createElement("li");
    li.textContent = conteudoTarefa;
    li.classList.add("tarefas-style");
    ul.appendChild(li);
    div.appendChild(ul);
    qntTarefas += 1;
  } else {
    const ul = document.getElementById("lista-tarefas");
    const li = document.createElement("li");
    li.textContent = conteudoTarefa;
    li.classList.add("tarefas-style");
    ul.appendChild(li);
    qntTarefas += 1;
  }
}

function excluirTarefa() {
  if (qntTarefas == 1) {
    const ul = document.getElementById("lista-tarefas");
    div.removeChild(ul);
    qntTarefas -= 1;
  } else {
    const ul = document.getElementById("lista-tarefas");
    const li = document.getElementsByTagName("li")[qntTarefas - 1];
    ul.removeChild(li);
    qntTarefas -= 1;
  }
}
