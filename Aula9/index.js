//getElementsByTagName() - pergar elementos pela tag
//referencia para a lista não ordenada
const lista = document.getElementsByTagName("ul")[0];
const listaTerefas = ["pão", "café", "sorvete"];
menu();
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
      menu();
    } else {
      if (escolha == 2) {
        cclTarefa();
        menu();
      } else {
        if (escolha == 3) {
          rtrTarefa();
          menu();
        } else {
          if (escolha == 4) {
            edtTarefa();
            menu();
          }
        }
      }
    }
  }
}
//função adicionar tarefa
function adcTarefa() {
  const tarefa = window.prompt(`Digite a descrição da tarefa: `);
  //Criando o LI
  const li = document.createElement("li");

  //preenchendo o li
  li.innerText = tarefa;

  //adicionar o li no ul
  lista.appendChild(li);

  //adicionando elemento na lista tarefa
  listaTerefas.push(li);

  const perguntar = window.confirm("Deseja inserir mais tarefas?");
  if (perguntar) {
    adcTarefa();
  }
}

//função para concluir a tarefa
function cclTarefa() {}

//função para retirar tarefa
function rtrTarefa() {
  //pedindo a tarefa para o usuário
  const tarefa = window.prompt("Digite a tarefa a ser retirada");

  //percorrendo a lista de nós
  for (let i = 0; i < listaTerefas.length; i++) {
    if (listaTerefas[i].innerText == tarefa) {
      //remoção do html
      listaTerefas[i].remove();
    }
  }

  const perguntar = window.confirm("Deseja retirar mais tarefas?");
  if (perguntar) {
    rtrTarefa();
  }
}

//função para editar taref
function edtTarefa() {}
