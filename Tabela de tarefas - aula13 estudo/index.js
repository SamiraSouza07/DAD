const tr = document.getElementsByTagName("tr");
let ultimoSave;
const qntTarefas = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const tdsTarefas = [
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []],
  [[], [], [], [], []],
];
setTimeout(() => {
  menu();
}, 500);
function menu() {
  const escolha = window.prompt(`
    [0]-Sair
    [1]-Inserir tarefa
    [2]-Remover tarefa
    [3]-Alterar tarefa
    [4]-Trocar tarefas
    [5]-Persistir tarefas
    [6]-Recriar tela
    `);
  if (escolha == 0) {
    return;
  } else if (escolha == 1) {
    let continuar = true;
    do {
      let diaSemana;
      let horario;
      const nomeTarefa = window.prompt("Digite o nome da tarefa");
      let diaValido = false;
      while (!diaValido) {
        diaSemana =
          window.prompt(`Em qual dia da semana você deseja adicionar esta tarefa?
          [1]-Segunda
          [2]-Terça
          [3]-Quarta
          [4]-Quinta
          [5]-Sexta`);
        if (diaSemana > 5 || diaSemana < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          diaValido = true;
        }
      }
      let horarioValido = false;
      while (!horarioValido) {
        horario = window.prompt(`Em qual horário você deseja adicionar a tarefa?
          [1]-14:30
          [2]-15:00
          [3]-15:30
          [4]-16:00
          [5]-16:30
          [6]-17:00
          [7]-17:30
          [8]-18:00`);
        if (horario > 8 || horario < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          horarioValido = true;
        }
      }
      inserirTarefa(nomeTarefa, diaSemana, horario);
      continuar = window.confirm("Deseja inserir mais tarefas?");
    } while (continuar);
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 2) {
    let continuar = true;
    do {
      let diaSemana;
      let horario;
      const nomeTarefa = window.prompt(
        "Digite o nome da tarefa que você deseja remover"
      );
      let diaValido = false;
      while (!diaValido) {
        diaSemana = window.prompt(`Em qual dia da semana esta tarefa esta?
          [1]-Segunda
          [2]-Terça
          [3]-Quarta
          [4]-Quinta
          [5]-Sexta`);
        if (diaSemana > 5 || diaSemana < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          diaValido = true;
        }
      }
      let horarioValido = false;
      while (!horarioValido) {
        horario = window.prompt(`Em qual horário esta tarefa esta?
          [1]-14:30
          [2]-15:00
          [3]-15:30
          [4]-16:00
          [5]-16:30
          [6]-17:00
          [7]-17:30
          [8]-18:00`);
        if (horario > 8 || horario < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          horarioValido = true;
        }
      }
      removerTarefa(nomeTarefa, diaSemana, horario);
      continuar = window.confirm("Deseja remover mais tarefas?");
    } while (continuar);
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 3) {
  } else if (escolha == 4) {
  } else if (escolha == 5) {
    persistirTarefas();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 6) {
    recriarTela();
    setTimeout(() => {
      menu();
    }, 500);
  }
}
//função para inserir tarefas
function inserirTarefa(tarefa, diaSemana, horario) {
  const td = tr[horario].children[diaSemana];
  if (qntTarefas[horario - 1][diaSemana - 1] == 0) {
    const ul1 = document.createElement("ul");
    const li1 = document.createElement("li");
    li1.textContent = tarefa;
    ul1.appendChild(li1);
    td.appendChild(ul1);
  } else {
    const ul = td.children[0];
    const li = document.createElement("li");
    li.textContent = tarefa;
    ul.appendChild(li);
  }
  qntTarefas[horario - 1][diaSemana - 1] += 1;
  tdsTarefas[horario - 1][diaSemana - 1].push(tarefa);
}

function removerTarefa(tarefa, diaSemana, horario) {
  const td = tr[horario].children[diaSemana];
  if (qntTarefas[horario - 1][diaSemana - 1] == 0) {
    window.alert("Não existem tarefas neste dia");
    return;
  } else {
    const ul = td.children[0];
    for (let i = 0; i < qntTarefas[horario - 1][diaSemana - 1]; i++) {
      if (ul.children[i].textContent == tarefa) {
        const li = ul.children[i];
        ul.removeChild(li);
        qntTarefas[horario - 1][diaSemana - 1] -= 1;
        const indice = tdsTarefas[horario - 1][diaSemana - 1].indexOf(tarefa);
        tdsTarefas[horario - 1][diaSemana - 1].splice(indice, 1);
      }
    }
  }
}
function alterarTarefa() {}
function trocarTarefas() {}
function pegarDataAtual() {
  const dataAtual = new Date();
  const opcoesFormatacao = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  dataFormatada = dataAtual.toLocaleDateString("pt-BR", opcoesFormatacao);
  return dataFormatada;
}
function persistirTarefas() {
  let salvar = window.confirm(
    "Deseja realmente salvar os dados? Ultimo save: " + ultimoSave
  );
  if (salvar) {
    const matrizTarefas = tdsTarefas;
    localStorage.setItem("Tarefas", JSON.stringify(matrizTarefas));
    window.alert("Dados salvos com sucesso ✅");
    ultimoSave = pegarDataAtual();
  }
}
function recriarTela() {
  const carregar = window.confirm(
    "Deseja carregar os dados do Save: " + ultimoSave + "?"
  );
  if (carregar) {
    const matrizTarefas = JSON.parse(localStorage.getItem("Tarefas"));
    for (let i = 0; i < matrizTarefas.length; i++) {
      for (let j = 0; j < matrizTarefas[i].length; j++) {
        for (let z = 0; z < matrizTarefas[i][j].length; z++) {
          inserirTarefa(matrizTarefas[i][j][z], j + 1, i + 1);
        }
      }
    }
    window.alert("Dados recarregados com sucesso ✅");
  }
}
