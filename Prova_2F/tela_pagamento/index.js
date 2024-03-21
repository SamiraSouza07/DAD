const dados = JSON.parse(localStorage.getItem("QntValores"));

document.getElementById("pipoca-valor").textContent = "R$" + dados[1] + ",00";

document.getElementById("refri-valor").textContent = "R$" + dados[3] + ",00";

document.getElementById("ingresso-valor").textContent = "R$" + dados[5] + ",00";

document.getElementById("total-valor").textContent =
  "R$" + (dados[1] + dados[3] + dados[5]) + ",00";

const botoes = document.getElementsByClassName("btn");
botoes[0].addEventListener("click", () => {
  const selecionado = document.getElementsByClassName("selecionado").length;
  if (selecionado == 0) {
    botoes[0].classList.add("selecionado");
  } else {
    botoes[0].classList.remove("selecionado");
  }
});

botoes[1].addEventListener("click", () => {
  const selecionado = document.getElementsByClassName("selecionado").length;
  if (selecionado == 0) {
    botoes[1].classList.add("selecionado");
  } else {
    botoes[1].classList.remove("selecionado");
  }
});

botoes[2].addEventListener("click", () => {
  const selecionado = document.getElementsByClassName("selecionado").length;
  if (selecionado == 0) {
    botoes[2].classList.add("selecionado");
  } else {
    botoes[2].classList.remove("selecionado");
  }
});

const pagar = document.getElementsByClassName("btn-final")[0];
pagar.addEventListener("click", () => {
  const selecionado = document.getElementsByClassName("selecionado").length;
  if (selecionado == 1) {
    window.alert("Programa finalizado, espero que tenha gostado :)");
  }
});
