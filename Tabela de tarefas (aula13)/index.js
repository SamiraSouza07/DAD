//mapeando as linhas da tabela
const tr = document.getElementsByTagName("tr");
//variável para guardar a data do ultimo save
let ultimoSave;
//matrizes para armazenar a quantidade e as descrições das tarefas por cada dia/hora
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
//função para apresentar o menu
function menu() {
  const escolha = window.prompt(`
  --------------------OPÇÕES--------------------
    [0]-Sair                          [4]-Trocar tarefas
    [1]-Inserir tarefa            [5]-Salvar tarefas
    [2]-Remover tarefa        [6]-Carregar dados
    [3]-Alterar tarefa           [7]-Visualizar tela
                    [8]-Limpar tela 
    
    `);
  //sair
  if (escolha == 0) {
    return;
  } //inserir tarefas
  else if (escolha == 1) {
    let continuar = true;
    //laço de repetição para inputar dados
    do {
      let diaSemana;
      let horario;
      //inputando a descrição da tarefa
      const nomeTarefa = window.prompt("Digite o nome da tarefa");
      let diaValido = false;
      //laço de repetição para inputar o dia da semana
      while (!diaValido) {
        diaSemana =
          window.prompt(`Em qual dia da semana você deseja adicionar esta tarefa?
          [1]-Segunda
          [2]-Terça
          [3]-Quarta
          [4]-Quinta
          [5]-Sexta`);
        //verificar se a opção é válida
        if (diaSemana > 5 || diaSemana < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          diaValido = true;
        }
      }
      let horarioValido = false;
      //laço de repetição para inputar o horário
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
        //verificar se a opção é válida
        if (horario > 8 || horario < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          horarioValido = true;
        }
      }
      //chamando função para inserir a tarefa
      inserirTarefa(nomeTarefa, diaSemana, horario);
      //perguntar se o usuário quer inserir mais tarefas
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
    let continuar = true;
    do {
      let diaSemana;
      let horario;
      const nomeTarefa = window.prompt(
        "Digite o nome da tarefa que você deseja alterar"
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
      const tarefaNova = window.prompt("Digite a nova descrição da tarefa");
      alterarTarefa(nomeTarefa, tarefaNova, diaSemana, horario);
      continuar = window.confirm("Deseja alterar mais tarefas?");
    } while (continuar);
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 4) {
    let continuar = true;
    do {
      let diaSemana1;
      let horario1;
      let diaSemana2;
      let horario2;
      const nomeTarefa1 = window.prompt(
        "Digite o nome da primeira tarefa que você deseja trocar"
      );
      let diaValido1 = false;
      while (!diaValido1) {
        diaSemana1 = window.prompt(`Em qual dia da semana esta tarefa esta?
          [1]-Segunda
          [2]-Terça
          [3]-Quarta
          [4]-Quinta
          [5]-Sexta`);
        if (diaSemana1 > 5 || diaSemana1 < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          diaValido1 = true;
        }
      }
      let horarioValido1 = false;
      while (!horarioValido1) {
        horario1 = window.prompt(`Em qual horário esta tarefa esta?
          [1]-14:30
          [2]-15:00
          [3]-15:30
          [4]-16:00
          [5]-16:30
          [6]-17:00
          [7]-17:30
          [8]-18:00`);
        if (horario1 > 8 || horario1 < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          horarioValido1 = true;
        }
      }

      const nomeTarefa2 = window.prompt(
        "Digite o nome da segunda tarefa que você deseja trocar"
      );
      let diaValido2 = false;
      while (!diaValido2) {
        diaSemana2 = window.prompt(`Em qual dia da semana esta tarefa esta?
          [1]-Segunda
          [2]-Terça
          [3]-Quarta
          [4]-Quinta
          [5]-Sexta`);
        if (diaSemana2 > 5 || diaSemana2 < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          diaValido2 = true;
        }
      }
      let horarioValido2 = false;
      while (!horarioValido2) {
        horario2 = window.prompt(`Em qual horário esta tarefa esta?
          [1]-14:30
          [2]-15:00
          [3]-15:30
          [4]-16:00
          [5]-16:30
          [6]-17:00
          [7]-17:30
          [8]-18:00`);
        if (horario2 > 8 || horario2 < 1) {
          window.alert("Digite apenas opções do menu");
        } else {
          horarioValido2 = true;
        }
      }

      trocarTarefas(
        nomeTarefa1,
        nomeTarefa2,
        diaSemana1,
        diaSemana2,
        horario1,
        horario2
      );
      continuar = window.confirm("Deseja trocar mais tarefas?");
    } while (continuar);
    setTimeout(() => {
      menu();
    }, 500);
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
  } else if (escolha == 7) {
    visualizarTabela();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha == 8) {
    limparTela();
    setTimeout(() => {
      menu();
    }, 500);
  } else if (escolha < 0 && escolha > 8) {
    window.alert("Digite apenas opções do menu ❌");
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
    let achou = false;
    for (let i = 0; i < qntTarefas[horario - 1][diaSemana - 1]; i++) {
      if (ul.children[i].textContent == tarefa) {
        const li = ul.children[i];
        ul.removeChild(li);
        qntTarefas[horario - 1][diaSemana - 1] -= 1;
        const indice = tdsTarefas[horario - 1][diaSemana - 1].indexOf(tarefa);
        tdsTarefas[horario - 1][diaSemana - 1].splice(indice, 1);
        achou = true;
      }
    }
    if (!achou) {
      window.alert("Não exsiste uma tarefa com a descrição informada");
    }
  }
}
function alterarTarefa(tarefa, tarefaNova, diaSemana, horario) {
  if (qntTarefas[horario - 1][diaSemana - 1] == 0) {
    window.alert("Não existem tarefas neste dia");
    return;
  } else {
    const td = tr[horario].children[diaSemana];
    const ul = td.children[0];
    let achou = false;
    for (let i = 0; i < qntTarefas[horario - 1][diaSemana - 1]; i++) {
      if (ul.children[i].textContent == tarefa) {
        const li = ul.children[i];
        li.textContent = tarefaNova;
        achou = true;
      }
    }
    if (!achou) {
      window.alert("Não exsiste uma tarefa com a descrição informada");
    }
  }
}
function trocarTarefas(
  tarefa1,
  tarefa2,
  diaSemana1,
  diaSemana2,
  horario1,
  horario2
) {
  if (qntTarefas[horario1 - 1][diaSemana1 - 1] == 0) {
    window.alert(
      "Não há uma tarefa " + tarefa1 + " no dia e horário informados ❌"
    );
    return;
  } else if (qntTarefas[horario2 - 1][diaSemana2 - 1] == 0) {
    window.alert(
      "Não há uma tarefa " + tarefa2 + " no dia e horário informados ❌"
    );
    return;
  } else {
    const td1 = tr[horario1].children[diaSemana1];
    const td2 = tr[horario2].children[diaSemana2];
    const ul1 = td1.children[0];
    const ul2 = td2.children[0];
    let achou1 = false;
    let li1;
    for (let i = 0; i < qntTarefas[horario1 - 1][diaSemana1 - 1]; i++) {
      if (ul1.children[i].textContent == tarefa1) {
        li1 = ul1.children[i];
        achou1 = true;
        tdsTarefas[horario1 - 1][diaSemana1 - 1][i] = tarefa2;
      }
    }
    let achou2 = false;
    let li2;
    for (let i = 0; i < qntTarefas[horario2 - 1][diaSemana2 - 1]; i++) {
      if (ul2.children[i].textContent == tarefa2) {
        li2 = ul2.children[i];
        achou2 = true;
        tdsTarefas[horario2 - 1][diaSemana2 - 1][i] = tarefa1;
      }
    }
    if (!achou1) {
      window.alert("A tarefa " + tarefa1 + " não existe ❌");
    }
    if (!achou2) {
      window.alert("A tarefa " + tarefa2 + " não existe ❌");
    }
    if (achou1 && achou2) {
      li1.textContent = tarefa2;
      li2.textContent = tarefa1;
    }
  }
}
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
    localStorage.clear();
    const matrizTarefas = tdsTarefas;
    localStorage.setItem("Tarefas", JSON.stringify(matrizTarefas));
    window.alert("Dados salvos com sucesso ✅");
    ultimoSave = pegarDataAtual();
  }
}
function recriarTela() {
  limparTela();
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
function visualizarTabela() {
  window.alert("Modo visualização");
}
function limparTela() {
  for (let i = 0; i < tdsTarefas.length; i++) {
    for (let j = 0; j < tdsTarefas[i].length; j++) {
      for (let z = 0; z < tdsTarefas[i][j].length; z++) {
        removerTarefa(tdsTarefas[i][j][z], j + 1, i + 1);
        z--;
      }
    }
  }
}
