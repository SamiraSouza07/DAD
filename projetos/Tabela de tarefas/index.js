const btn = document.getElementById("btn-inserir");
const inputTarefa = document.getElementById("inserir");
const inputSemana = document.getElementById("dia-semana");
const inputHorario = document.getElementById("horario");
let tarefa = "";
let semana = -1;
let horario = -1;
btn.addEventListener("mouseover", () => {
  if (inputTarefa.value == "") {
    btn.classList.add("btn-sem-selecao");
  } else {
    btn.classList.remove("btn-sem-selecao");
  }
});
btn.addEventListener("click", () => {
  if (!inputTarefa.value == "") {
    tarefa = inputTarefa.value.trim();
    semana = inputSemana.value;
    horario = inputHorario.value;
    inputTarefa.value = "";
    inputSemana.value = 1;
    inputHorario.value = 1;
    inserir(tarefa, semana, horario);
  }
});

function inserir(tarefa, diaSemana, horario) {
  tarefa = tarefa.charAt(0).toUpperCase() + tarefa.substring(1)
  const tr = document.getElementsByTagName("tr")[horario];
  const td = tr.children[diaSemana];
  if (td.innerHTML.includes("<ul>")) {
    const div = document.createElement("div");
    div.classList.add("bloco-tarefas")
    const li = document.createElement("li");
    li.classList.add("tarefas");
    li.addEventListener("click", () => {
      concluirTarefa(li);
    });
    li.textContent = tarefa;
    const img = document.createElement("img");
    img.setAttribute("src", "assets/X.png");
    img.classList.add("x-invisivel");
    div.addEventListener("mouseenter", () => {
      aparecerX(img);
    });
    div.addEventListener("mouseleave", () => {
      desaparecerX(img);
    });
    img.addEventListener("click", () => {
      excluirTarefa(li, diaSemana, horario);
    });
    li.appendChild(img);
    div.appendChild(li);
    td.children[0].appendChild(div);
  } else {
    const div = document.createElement("div");
    div.classList.add("bloco-tarefas")
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.classList.add("tarefas");
    li.addEventListener("click", () => {
      concluirTarefa(li);
    });
    const img = document.createElement("img");
    img.setAttribute("src", "assets/X.png");
    img.classList.add("x-invisivel");
    div.addEventListener("mouseenter", () => {
      aparecerX(img);
    });
    div.addEventListener("mouseleave", () => {
      desaparecerX(img);
    });
    img.addEventListener("click", () => {
      excluirTarefa(li, diaSemana, horario);
    });

    li.textContent = tarefa;
    li.appendChild(img);
    div.appendChild(li);
    ul.appendChild(div);
    td.appendChild(ul);
  }
}

function aparecerX(img) {
  img.classList.add("x-aparecer");
}
function desaparecerX(img) {
  img.classList.remove("x-aparecer");
}

function excluirTarefa(li, diaSemana, horario) {
  const tr = document.getElementsByTagName("tr")[horario];
  const td = tr.children[diaSemana];
  if (!td.innerHTML.includes("<ul>")) {
    td.children[0].remove();
  } else {
    li.remove();
  }
}
function concluirTarefa(li) {
  li.classList.toggle("concluida");
}
