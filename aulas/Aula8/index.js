//getElementsByTagName() - pergar elementos pela tag
//referencia para a lista não ordenada
const lista = document.getElementsByTagName("ul")[0];
const listaTerefas = ["pão", "café", "sorvete"];
console.log(lista.innerHTML);
console.log(lista);
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
  //adicionando a tag na lista de tarefas no html
  listaTerefas.push(tarefa);
  lista.innerHTML += `<li>${tarefa}</li>`; //concatenando o nome da tarefa dentro da tag, para o innerHTML inserir o li com o nome da tarefa dentro
  const perguntar = window.confirm("Deseja inserir mais tarefas?");
  if (perguntar) {
    adcTarefa();
  }
}

//função para concluir a tarefa
function cclTarefa() {
  const escolha3 = window.prompt(`
  [1] - Concluir tarefa pela descrição
  [2] - Concluir tarefa pela posição
        obs: inicio1
`);
  let indice;
  if (escolha3 == 1) {
    const concluir = window.prompt("Qual tarefa você deseja concluir?");
    indice = listaTerefas.indexOf(concluir);
  } else if (escolha3 == 2) {
    indice = window.prompt("Qual o número da tarefa que você deseja concluir?");
    indice--;
  }

  if (indice < 0) {
    window.alert("Tarefa não encontrada");
  } else {
    lista.innerHTML = "";
    for (let i = 0; i < listaTerefas.length; i++) {
      console.log(i + "" + indice);
      if (i == indice) {
        lista.innerHTML += `<li><del>${listaTerefas[i]}</del></li>`;
      } else {
        lista.innerHTML += `<li>${listaTerefas[i]}</li>`;
      }
    }
    const perguntar2 = window.confirm("Deseja concluir mais tarefas?");
    if (perguntar2) {
      cclTarefa();
    }
  }
}

//função para retirar tarefa
function rtrTarefa() {
  const escolha2 = window.prompt(`
[1] - Retirar pela descrição
[2] - Retirar pela posição
      obs: inicio 1
`);
  let indice;
  if (escolha2 == 1) {
    //recebendo a tarefa a ser retirada
    const retirar = window.prompt("Qual tarefa você deseja retirar?");

    //encontrando elemento pelo método
    indice = listaTerefas.indexOf(retirar);
    //função para editar tarefa
    //index >=0 esta na lista
    // index = -1 não está na lista
  } else if (escolha2 == 2) {
    indice = window.prompt("Qual o número da tarefa que você deseja retirar?");
    indice--;
  }

  if (indice < 0) {
    window.alert("Tarefa não encontrada");
  } else {
    //retirada da tarefa pelo método splice
    listaTerefas.splice(indice, 1);
    //esvaziando a lista`;
    lista.innerHTML = ``;
    for (let i = 0; i < listaTerefas.length; i++) {
      //refazendo a lista
      lista.innerHTML += `<li>${listaTerefas[i]}</li>`;
    }
    const perguntar = window.confirm("Deseja retirar mais tarefas?");
    if (perguntar) {
      rtrTarefa();
    }
  }
}

//função para editar taref
function edtTarefa() {
  const escolha3 = window.prompt(`
  [1] - Editar pela descrição
  [2] - Editar pela posição
        obs: inicio 1
  `);
  let indice;

  if (escolha3 == 1) {
    const editar = window.prompt("Qual tarefa você deseja editar?");
    indice = listaTerefas.indexOf(editar);
  } else if (escolha3 == 2) {
    indice = window.prompt("Qual o número da tarefa que você deseja editar?");
    indice--;
  }
  if (indice < 0) {
    window.alert("Tarefa não encontrada");
  } else {
    let tarefa = window.prompt("Digite o nome da nova tarefa:");
    lista.innerHTML = ``;
    for (let i = 0; i < listaTerefas.length; i++) {
      if (i == indice) {
        lista.innerHTML += `<li>${tarefa}</li>`;
      } else {
        lista.innerHTML += `<li>${listaTerefas[i]}</li>`;
      }
    }
    const perguntar = window.confirm("Deseja editar mais tarefas?");
    if (perguntar) {
      edtTarefa();
    }
  }
}
