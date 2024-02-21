//getElementsByTagName() - pergar elementos pela tag
//referencia para a lista não ordenada
const lista = document.getElementsByTagName("ul")[0];
const listaTerefas = ["pão", "café", "sorvete"];
setTimeout(() => {
  menu();
}, 500);
//funcao meno
function menu() {
  const escolha = window.prompt(`
    [0] - Sair
    [1] - Adicionar tarefa
    [2] - Concluir tarefa
    [3] - Retirar tarefa
    [4] - Editar tarefa
    `);
  if (escolha == 0) {
    return;
  } else {
    if (escolha == 1) {
      adcTarefa();
      setTimeout(() => {
        menu();
      }, 500);
    } else {
      if (escolha == 2) {
        cclTarefa();
        setTimeout(() => {
          menu();
        }, 500);
      } else {
        if (escolha == 3) {
          rtrTarefa();
          setTimeout(() => {
            menu();
          }, 500);
        } else {
          if (escolha == 4) {
            edtTarefa();
            setTimeout(() => {
              menu();
            }, 500);
          }
        }
      }
    }
  }
}
//função adicionar tarefa
function adcTarefa() {
  const tarefa = window.prompt(`adc-Digite a descrição da tarefa: `);
  //Criando o LI
  const li = document.createElement("li");

  //preenchendo o li
  li.innerText = tarefa;

  //adicionar o li no ul
  lista.appendChild(li);

  //adicionando elemento na lista tarefa
  listaTerefas.push(li);

  const perguntar = window.confirm("adc-Deseja inserir mais tarefas?");
  if (perguntar) {
    setTimeout(() => {
      adcTarefa();
    }, 500);
  }
}

//função para concluir a tarefa
function cclTarefa() {
  //pedindo a tarefa para o usuário
  const tarefa = window.prompt("ccl-Digite a tarefa a ser concluida");

  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      //remoção do html
      listaTerefas[i].remove();

      //criar nova tarefa riscada
      const li = document.createElement("li");
      const del = document.createElement("del");

      //Preenchendo o li e o del
      del.innerText = tarefa;

      //adicionando o del no li e o li no ul
      li.appendChild(del);
      lista.appendChild(li);
    }
  }
  const perguntar = window.confirm("ccl-Deseja concluir mais tarefas?");
  if (perguntar) {
    setTimeout(() => {
      cclTarefa();
    }, 500);
  }
}

//função para retirar tarefa
function rtrTarefa() {
  //pedindo a tarefa para o usuário
  const tarefa = window.prompt("rtr-Digite a tarefa a ser retirada");

  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      //remoção do html
      listaTerefas[i].remove();
    }
  }

  const perguntar = window.confirm("rtr-Deseja retirar mais tarefas?");
  if (perguntar) {
    setTimeout(() => {
      rtrTarefa();
    }, 500);
  }
}

//função para editar taref
function edtTarefa() {
  //pedindo a tarefa para o usuário
  const tarefa = window.prompt("edt-Digite a tarefa a ser retirada");
  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      const tarefaNova = window.prompt(
        "edt-Digite a nova informação da tarefa"
      );
      //remoção do html
      listaTerefas[i].remove();
    }
  }
}
