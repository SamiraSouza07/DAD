//referencia para a lista não ordenada
const lista = document.getElementsByTagName("ul")[0];
const listaTerefas = [];
const listaNConcluidas = [];
const listaConcluidas = [];
const persistir = {};
setTimeout(() => {
  menu();
}, 500);
function menu() {
  const escolha = window.prompt(
    `
    [0] - Sair
    [1] - Adicionar tarefa
    [2] - Concluir tarefa
    [3] - Editar tarefa
    [4] - Retirar tarefa
    [5] - Salvar
    [6] - Recarregar dados
    [7] - Limpar tarefas
    `
  );
  if (escolha == 0) {
    window.alert("Saindo do programa...");
    return;
  } else if (escolha == 1) {
    //pedindo a descrição da tarefa para o usuário
    let tarefa = window.prompt(`adc-Digite a descrição da tarefa`).trim();
    adcTarefa(tarefa);
    let perguntar;
    //perguntando se o usuário quer inserir mais tarefas
    do {
      perguntar = window.confirm("adc-Deseja inserir mais tarefas?");
      if (perguntar) {
        let tarefa = window.prompt(`adc-Digite a descrição da tarefa`).trim();
        adcTarefa(tarefa);
      }
    } while (perguntar);
    //dando um tempo antes de chamar o menu novamente
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 2) {
    //pedindo a tarefa a ser concluida para o usuário
    let tarefa = window.prompt("ccl-Digite a tarefa a ser concluida").trim();
    cclTarefa(tarefa);
    let perguntar;
    //perguntando se o usuário quer concluir mais tarefas
    do {
      perguntar = window.confirm("ccl-Deseja concluir mais tarefas?");
      if (perguntar) {
        let tarefa = window
          .prompt("ccl-Digite a tarefa a ser concluida")
          .trim();
        cclTarefa(tarefa);
      }
    } while (perguntar);
    //dando um tempo antes de chamar o menu novamente
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 3) {
    //pedindo a tarefa para o usuário
    let tarefa = window.prompt("edt-Digite a tarefa a ser editada").trim();
    edtTarefa(tarefa);
    let perguntar;
    //perguntando se o usuário quer editar mais tarefas
    do {
      perguntar = window.confirm("edt-Deseja editar mais tarefas?");
      if (perguntar) {
        let tarefa = window
          .prompt("ccl-Digite a tarefa a ser concluida")
          .trim();
        cclTarefa(tarefa);
      }
    } while (perguntar);
    //dando um tempo antes de chamar o menu novamente
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 4) {
    //pedindo a tarefa para o usuário
    const tarefa = window.prompt("rtr-Digite a tarefa a ser retirada").trim();
    rtrTarefa(tarefa);
    let perguntar;
    //perguntando se o usuário quer retirar mais tarefas
    do {
      perguntar = window.confirm("rtr-Deseja retirar mais tarefas?");
      if (perguntar) {
        let tarefa = window.prompt("rtr-Digite a tarefa a ser retirada").trim();
        rtrTarefa(tarefa);
      }
    } while (perguntar);
    //dando um tempo antes de chamar o menu novamente
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 5) {
    persistirTarefas();
    //dando um tempo antes de chamar o menu novamente
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 6) {
    recriarTela();
    //dando um tempo antes de chamar o menu novamente
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 7) {
    limparTela();
    //dando um tempo antes de chamar o menu novamente
    setTimeout(() => {
      menu();
    }, 500);
  }
}
//função para adicionar tarefas
function adcTarefa(tarefa) {
  //Criando o li
  const li = document.createElement("li");

  //preenchendo o li
  li.innerText = tarefa;

  //adicionar o li no ul
  lista.appendChild(li);

  //adicionando elemento na lista tarefa
  listaTerefas.push(li);
  listaNConcluidas.push(li);
}
//função para concluir as tarefas
function cclTarefa(tarefa) {
  let li;
  let del;
  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      //remoção do html e do js
      listaTerefas[i].remove();
      listaTerefas.splice(i, 1);

      //criar nova tarefa riscada
      li = document.createElement("li");
      del = document.createElement("del");

      //Preenchendo o li e o del
      del.innerText = tarefa;

      //adicionando o del no li e o li no ul
      li.appendChild(del);
      lista.appendChild(li);

      //adicionando o elemento li na lista
      listaTerefas.push(li);
    }
  }
  listaConcluidas.push(li);
  for (let j = 0; j < listaNConcluidas.length; j++) {
    if (listaNConcluidas[j].innerText == tarefa) {
      listaNConcluidas[j].remove();
      listaNConcluidas.splice(j, 1);
    }
  }
}
//função para editar a tarefa
function edtTarefa(tarefa) {
  //percorrendo a lista de nós
  let continuar = false;
  let alteracao;
  for (let i = 0; i < listaConcluidas.length; i++) {
    if (listaConcluidas[i].innerText == tarefa) {
      window.alert("Você não pode editar uma tarefa concluída");
    } else {
      continuar = true;
    }
  }
  if (continuar) {
    for (let i = 0; i < listaTerefas.length; i++) {
      if (listaTerefas[i].innerText == tarefa) {
        //pedindo a alteração
        alteracao = window.prompt("edt-Digite a nova tarefa");

        //remoção do html
        listaTerefas[i].innerText = alteracao;
      }
    }
    for (let i = 0; i < listaNConcluidas.length; i++) {
      if (listaNConcluidas[i].innerText == tarefa) {
        listaNConcluidas[i].innerText = alteracao;
      }
    }
  }
}
//função para retirar a tarefa
function rtrTarefa(tarefa) {
  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      //remoção do html
      listaTerefas[i].remove();
      listaTerefas.splice(i, 1);
    }
  }
  for (let i = 0; i < listaNConcluidas.length; i++) {
    if (listaNConcluidas[i].innerText == tarefa) {
      listaNConcluidas[i].remove();
      listaNConcluidas.splice(i, 1);
    }
  }
  for (let i = 0; i < listaConcluidas.length; i++) {
    if (listaConcluidas[i].innerText == tarefa) {
      listaConcluidas[i].remove();
      listaConcluidas.splice(i, 1);
    }
  }
}

//função para persistir as tarefas (salvar)
function persistirTarefas() {
  localStorage.clear();
  //guardando os conteudos das tags del (tarefas concluidas)
  let concluidasConteudos = [];
  let naoConcluidasConteudo = [];

  //preenchendo as listas com os conteudos
  for (let i = 0; i < listaNConcluidas.length; i++) {
    naoConcluidasConteudo.push(listaNConcluidas[i].innerText);
  }
  for (let i = 0; i < listaConcluidas.length; i++) {
    concluidasConteudos.push(listaConcluidas[i].innerText);
  }
  localStorage.setItem("Concluídas", JSON.stringify(concluidasConteudos));
  localStorage.setItem("Não concluídas", JSON.stringify(naoConcluidasConteudo));
  window.alert("Dados salvos com sucesso✅");
}
//função para limpar todas as tarefas da tela
function limparTela() {
  console.log(listaTerefas.length);
  for (let i = 0; i < listaTerefas.length; i++) {
    console.log(listaTerefas[i].innerText);
    rtrTarefa(listaTerefas[i].innerText);
    i--;
  }
  console.log(listaTerefas.length);
}
//função para recriar a tela, a partir do ultimo save
function recriarTela() {
  limparTela();
  const concluidas = JSON.parse(localStorage.getItem("Concluídas"));
  const nConcluidas = JSON.parse(localStorage.getItem("Não concluídas"));
  for (let i = 0; i < nConcluidas.length; i++) {
    adcTarefa(nConcluidas[i]);
  }
  for (let i = 0; i < concluidas.length; i++) {
    let tarefa = concluidas[i];
    adcTarefa(tarefa);
    cclTarefa(tarefa);
  }
}
