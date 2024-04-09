//referencia para a lista não ordenada
const lista = document.getElementsByTagName("ul")[0];
const listaTerefas = [];
setTimeout(() => {
  menu();
}, 500);
function menu() {
  const escolha = window
    .prompt(
      `
    [0] - Sair
    [1] - Adicionar tarefa
    [2] - Concluir tarefa
    [3] - Editar tarefa
    [4] - Retirar tarefa
    `
    )
    .trim();
  if (escolha == 0) {
    return;
  } else if (escolha == 1) {
    adcTarefa();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 2) {
    cclTarefa();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 3) {
    edtTarefa();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 4) {
    rtrTarefa();
    setTimeout(() => {
      menu();
    }, 500);
  }
}

function adcTarefa() {
  let tarefa = window.prompt(`adc-Digite a descrição da tarefa`).trim();
  //Criando o li
  const li = document.createElement("li");

  //preenchendo o li
  li.innerText = tarefa;

  //adicionar o li no ul
  lista.appendChild(li);

  //adicionando elemento na lista tarefa
  listaTerefas.push(li);

  const perguntar = window.confirm("adc-Deseja inserir mais tarefas?");
  if (perguntar) {
    adcTarefa();
  }
}

function cclTarefa() {
  //pedindo a tarefa para o usuário
  let tarefa = window.prompt("ccl-Digite a tarefa a ser concluida").trim();

  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      //remoção do html e do js
      listaTerefas[i].remove();
      listaTerefas.splice(i, 1);

      //criar nova tarefa riscada
      const li = document.createElement("li");
      const del = document.createElement("del");

      //Preenchendo o li e o del
      del.innerText = tarefa;

      //adicionando o del no li e o li no ul
      li.appendChild(del);
      lista.appendChild(li);

      //adicionando o elemento li na lista
      listaTerefas.push(li);
    }
  }
  const perguntar = window.confirm("ccl-Deseja concluir mais tarefas?");
  if (perguntar) {
    cclTarefa();
  }
}

function edtTarefa() {
  //pedindo a tarefa para o usuário
  let tarefa = window.prompt("edt-Digite a tarefa a ser editada").trim();
  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      //pedindo a alteração
      const alteracao = window.prompt("edt-Digite a nova tarefa");

      //remoção do html
      listaTerefas[i].innerText = alteracao;
    }
  }

  const perguntar = window.confirm("edt-Deseja editar mais tarefas?");
  if (perguntar) {
    edtTarefa();
  }
}

function rtrTarefa() {
  //pedindo a tarefa para o usuário
  const tarefa = window.prompt("rtr-Digite a tarefa a ser retirada").trim();

  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      //remoção do html
      listaTerefas[i].remove();
      listaTerefas.splice(i, 1);
    }
  }

  const perguntar = window.confirm("rtr-Deseja retirar mais tarefas?");
  if (perguntar) {
    rtrTarefa();
  }
}
