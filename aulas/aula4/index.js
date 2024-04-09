//json = java script object notation
//Criação de um sistema de banco
const cc = [];
cliente1 = {
  id: "1",
  nome: "Pedro",
  money: 500,
  limite: 10200,
  stts: true,
};

cc.push(cliente1);

cliente2 = {
  id: "12",
  nome: "Hélio",
  money: 1200,
  limite: 50000,
  stts: true,
};

cc.push(cliente2);

//Função para trasnferir dinheiro entre as contas
function envioDinheiro(vlr, idOrigem, idDestino) {
  //verificando os stts da conta de origem
  if (cc[idOrigem - 1]["stts"] && cc[idDestino - 1]["stts"]) {
    //verificação de saldo e limite
    if (cc[idOrigem - 1]["money"] >= vlr && cc[idOrigem - 1]["limite"] >= vlr) {
      //tirando o dinheiro da conta de origem a acrescentando na de destino
      cc[idOrigem - 1]["money"] -= vlr;
      cc[idDestino - 1]["money"] += vlr;
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
