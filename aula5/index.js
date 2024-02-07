//html segue a estrutura de árvore
//window é o pai/mãe de todas as outras tags

//Usando clientes da aula passada
const cc = [];
cliente1 = {
  id: "1",
  nome: "Pedro",
  money: 500,
  limite: 10200,
  stts: true,
};

cliente2 = {
  id: "12",
  nome: "Hélio",
  money: 1200,
  limite: 50000,
  stts: true,
};

//nome conta 1
// console.log(nomeConta1)
// console.log(nomeConta1.textContent)
// console.log(nomeConta1.innerText)

//alterando o nome
const nomeConta1 = document.getElementById("nome-conta1");
nomeConta1.textContent = cliente1.nome;

const idConta1 = document.getElementById("id-conta1");
idConta1.textContent = cliente1.id;

const saldoConta1 = document.getElementById("saldo-conta1");
saldoConta1.textContent = cliente1.money;

const limiteConta1 = document.getElementById("limite-conta1");
limiteConta1.textContent = cliente1.limite;

const statusConta1 = document.getElementById("status-conta1");
statusConta1.textContent = cliente1.stts;
