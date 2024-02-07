const cc = [];
cliente1 = {
  id: "1",
  nome: "Pedro",
  money: 500,
  limite: 10200,
  stts: true,
};

cliente2 = {
  id: "2",
  nome: "Hélio",
  money: 1200,
  limite: 50000,
  stts: true,
};

const nomeConta1 = document.getElementById("nome-conta1");
nomeConta1.textContent = cliente1.nome;
const nomeConta2 = document.getElementById("nome-conta2");
nomeConta2.textContent = cliente2.nome;

const idConta1 = document.getElementById("id-conta1");
idConta1.textContent = cliente1.id;
const idConta2 = document.getElementById("id-conta2");
idConta2.textContent = cliente2.id;

const saldoConta1 = document.getElementById("saldo-conta1");
saldoConta1.textContent = cliente1.money;
const saldoConta2 = document.getElementById("saldo-conta2");
saldoConta2.textContent = cliente2.money;

const limiteConta1 = document.getElementById("limite-conta1");
limiteConta1.textContent = cliente1.limite;
const limiteConta2 = document.getElementById("limite-conta2");
limiteConta2.textContent = cliente2.limite;

const statusConta1 = document.getElementById("status-conta1");
statusConta1.textContent = cliente1.stts;
const statusConta2 = document.getElementById("status-conta2");
statusConta2.textContent = cliente2.stts;

//procurando por classe
const nome = document.getElementsByClassName("nome");

//Função para trasnferir dinheiro entre as contas
function envioDinheiro(vlr, idOrigem, idDestino) {
  //verificando os stts da conta de origem
  if (cc[idOrigem - 1]["stts"] && cc[idDestino - 1]["stts"]) {
    //verificação de saldo e limite
    if (cc[idOrigem - 1]["money"] >= vlr && cc[idOrigem - 1]["limite"] >= vlr) {
      //tirando o dinheiro da conta de origem a acrescentando na de destino
      cc[idOrigem - 1]["money"] -= vlr;
      if (idOrigem - 1 == 0) {
        saldoConta1.textContent = cc[idOrigem - 1]["money"];
      } else {
        saldoConta2.textContent = cc[idOrigem - 1]["money"];
      }

      cc[idDestino - 1]["money"] += vlr;
      if (idDestino - 1 == 0) {
        saldoConta1.textContent = cc[idDestino - 1]["money"];
      } else {
        saldoConta2.textContent = cc[idDestino - 1]["money"];
      }
    }
  }
}

//interface

const opc = window.prompt(`

[1] - Trasferencia de dinheiro`);

if (opc == 1) {
  const vlr = Number(window.prompt("Digite o valor: "));

  const idOrigem = window.prompt("Id da conta de origem: ");

  const idDestino = window.prompt("Id da conta de destino: ");

  envioDinheiro(vlr, idOrigem, idDestino);

  console.log(cc);
}
