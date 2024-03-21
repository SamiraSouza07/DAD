// todas as celulas
const celulas = document.getElementsByTagName("td");
let qntPipocas = document.getElementById("n-pipocas").textContent;
let qntRefris = document.getElementById("n-refris").textContent;
let qntIngressos = document.getElementById("n-ingressos").textContent;
let qntTotal = document.getElementById("n-total");
let valorPipocas = document.getElementById("valor-pipocas");
let valorRefris = document.getElementById("valor-refris");
let valorIngressos = document.getElementById("valor-ingressos");
let valorTotal = document.getElementById("valor-total");
//encontrando os ocupados e os não ocupados
const indisponivel = [];
const naoOcupados = [];
const ocupados = [];
for (let i = 0; i < 120; i++) {
  celulas[i].classList.add("assento");
  if (celulas[i].textContent == "") {
    indisponivel.push(celulas[i]);
    celulas[i].classList.add("sem-assento");
  } else if (celulas[i].innerHTML.includes("<s>")) {
    celulas[i].innerHTML = celulas[i].textContent;
    ocupados.push(celulas[i]);
    celulas[i].classList.add("ocupado");
  } else {
    naoOcupados.push(celulas[i]);
    celulas[i].classList.add("nao-ocupado");
  }
}

const menosPipoca = document.getElementById("-pipoca");
const maisPipoca = document.getElementById("+pipoca");
const menosRefri = document.getElementById("-refri");
const maisRefri = document.getElementById("+refri");

menosPipoca.addEventListener("click", () => {
  menosPipocas();
});
maisPipoca.addEventListener("click", () => {
  maisPipocas();
});
menosRefri.addEventListener("click", () => {
  menosRefris();
});

maisRefri.addEventListener("click", () => {
  maisRefris();
});

function menosPipocas() {
  if (!parseInt(qntPipocas) <= 0) {
    qntPipocas = parseInt(qntPipocas) - parseInt(1);
    document.getElementById("n-pipocas").textContent = qntPipocas;

    valorPipocas.textContent = "R$" + qntPipocas * 15 + ",00";
  }
  const qntSelecionados = document.getElementsByClassName("selecionado").length;
  qntTotal.textContent =
    parseInt(qntPipocas) + parseInt(qntRefris) + parseInt(qntSelecionados);

  calculaTotal();
}
function maisPipocas() {
  if (parseInt(qntPipocas) < 15) {
    qntPipocas = parseInt(qntPipocas) + parseInt(1);
    document.getElementById("n-pipocas").textContent = qntPipocas;

    valorPipocas.textContent = "R$" + qntPipocas * 15 + ",00";
  }
  const qntSelecionados = document.getElementsByClassName("selecionado").length;
  qntTotal.textContent =
    parseInt(qntPipocas) + parseInt(qntRefris) + parseInt(qntSelecionados);
  calculaTotal();
}

function menosRefris() {
  if (!parseInt(qntRefris) <= 0) {
    qntRefris = parseInt(qntRefris) - parseInt(1);
    document.getElementById("n-refris").textContent = qntRefris;

    valorRefris.textContent = "R$" + qntRefris * 12 + ",00";
  }
  const qntSelecionados = document.getElementsByClassName("selecionado").length;
  qntTotal.textContent =
    parseInt(qntPipocas) + parseInt(qntRefris) + parseInt(qntSelecionados);

  calculaTotal();
}
function maisRefris() {
  if (parseInt(qntRefris) < 10) {
    qntRefris = parseInt(qntRefris) + parseInt(1);
    document.getElementById("n-refris").textContent = qntRefris;

    valorRefris.textContent = "R$" + qntRefris * 12 + ",00";
  }
  const qntSelecionados = document.getElementsByClassName("selecionado").length;
  qntTotal.textContent =
    parseInt(qntPipocas) + parseInt(qntRefris) + parseInt(qntSelecionados);
  calculaTotal();
}

verificarClicar();
geraArrayAssentos();
function verificarClicar() {
  const assentos = document.getElementsByClassName("nao-ocupado");
  for (let i = 0; i < assentos.length; i++) {
    assentos[i].addEventListener("click", () => {
      selecionar(assentos[i]);
    });
  }
}

function selecionar(td) {
  td.classList.toggle("selecionado");
  const qntSelecionados = document.getElementsByClassName("selecionado").length;
  document.getElementById("n-ingressos").textContent = qntSelecionados;

  document.getElementById("valor-ingressos").textContent =
    "R$" + qntSelecionados * 35 + ",00";

  qntTotal.textContent =
    parseInt(qntPipocas) + parseInt(qntRefris) + parseInt(qntSelecionados);
  calculaTotal();
  geraArrayAssentos();
}
function calculaTotal() {
  let pipoca = document.getElementById("n-pipocas").textContent;
  let refri = document.getElementById("n-refris").textContent;
  let ingresso = document.getElementById("n-ingressos").textContent;
  pipoca = pipoca * 15;
  refri = refri * 12;
  ingresso = ingresso * 35;
  let soma = pipoca + refri + ingresso;
  valorTotal.textContent = "R$" + soma + ",00";
}
function geraArrayAssentos() {
  const qnt = document.getElementsByClassName("selecionado").length;
  console.log(qnt);
  if (qnt > 0) {
    const array = document.getElementsByClassName("selecionado");
    const array2 = [];
    for (let i = 0; i < array.length; i++) {
      array2.push(array[i].textContent);
    }
    document.getElementById("assentos").textContent = array2;
  } else if (qntIngressos == 0) {
    document.getElementById("assentos").textContent =
      "Nenhum assento selecionado";
  }
}

const finaliza = document.getElementById("finalizar")
finaliza.addEventListener("click",()=>{
  salvarDados()
})

function salvarDados(){
  localStorage.clear()
  let pipoca = document.getElementById("n-pipocas").textContent;
  let refri = document.getElementById("n-refris").textContent;
  let ingresso = document.getElementById("n-ingressos").textContent;
  let valorpipoca = pipoca * 15;
  let valorrefri = refri * 12;
  let valoringresso = ingresso * 35;
  const dados = [pipoca, valorpipoca, refri, valorrefri, ingresso, valoringresso]
  localStorage.setItem("QntValores", JSON.stringify(dados))
}