//getElementsByTagName() - pergar elementos pela tag
//referencia para a lista não ordenada
const lista = document.getElementsByTagName("ul")[0];
const listaTerefas = [];
console.log(lista.innerHTML);
console.log(lista);
menu();
//funcao meno
function menu() {
  const escolha = window.prompt(`
    [1] - Adicionar tarefa
    [2] - Concluir tarefa
    [3] - Retirar tarefa
    [4] - Editar tarefa
    `);

  if (escolha == 1) {
    adcTarefa();
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
function cclTarefa() {}

//função para retirar tarefa
function rtrTarefa() {
  const retirar = window.prompt("Qual tarefa você deseja retirar?");
}

//função para editar tarefa
function edtTarefa() {}
