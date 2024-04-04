const dados = JSON.parse(localStorage.getItem("QntValores"));

document.getElementById("pipoca-valor").textContent = "R$" + dados[1] + ",00";

document.getElementById("refri-valor").textContent = "R$" + dados[3] + ",00";

document.getElementById("ingresso-valor").textContent = "R$" + dados[5] + ",00";

document.getElementById("total-valor").textContent =
  "R$" + (dados[1] + dados[3] + dados[5]) + ",00";

const botoes = document.getElementsByClassName("btn");
botoes[0].addEventListener("click", () => {
  botao0();
});
botoes[0].addEventListener("mouseenter", () => {
  botoes[0].classList.add("btn-em-cima");
});
botoes[0].addEventListener("mouseleave", () => {
  botoes[0].classList.remove("btn-em-cima");
});

botoes[1].addEventListener("click", () => {
  botao1();
});
botoes[1].addEventListener("mouseenter", () => {
  botoes[1].classList.add("btn-em-cima");
});
botoes[1].addEventListener("mouseleave", () => {
  botoes[1].classList.remove("btn-em-cima");
});

botoes[2].addEventListener("click", () => {
  botao2();
});
botoes[2].addEventListener("mouseenter", () => {
  botoes[2].classList.add("btn-em-cima");
});
botoes[2].addEventListener("mouseleave", () => {
  botoes[2].classList.remove("btn-em-cima");
});

const pagar = document.getElementsByClassName("btn-final")[0];
pagar.addEventListener("click", () => {
  const selecionado = document.getElementsByClassName("selecionado").length;
  if (selecionado == 1) {
    window.alert("Programa finalizado, espero que tenha gostado :)");
  } else {
    window.alert("Selecione uma forma de pagamento");
  }
});
pagar.addEventListener("mouseenter", () => {
  pagar.classList.add("btn-final-em-cima");
});
pagar.addEventListener("mouseleave", () => {
  pagar.classList.remove("btn-final-em-cima");
});

function botao0() {
  const selecionado = document.getElementsByClassName("selecionado").length;
  if (selecionado == 0) {
    botoes[0].classList.add("selecionado");
    const img = document.createElement("img");
    img.setAttribute("id", "img0");
    img.setAttribute("src", "assets/qcode.jpg");
    document.getElementById("bloco-imagem").appendChild(img);
    botoes[0].addEventListener("mouseenter", () => {
      botoes[0].classList.add("selecionado-em-cima");
    });
    botoes[0].addEventListener("mouseleave", () => {
      botoes[0].classList.remove("selecionado-em-cima");
    });
  } else {
    botoes[0].classList.remove("selecionado");
    document.getElementById("img0").remove();
    botoes[0].addEventListener("mouseenter", () => {
      botoes[0].classList.remove("selecionado-em-cima");
    });
  }
}

function botao1() {
  const selecionado = document.getElementsByClassName("selecionado").length;
  if (selecionado == 0) {
    botoes[1].classList.add("selecionado");
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.setAttribute("id", "p1");
    p.textContent = "Entre no aplicativo do seu banco e efetue o pagamento";
    img.setAttribute("id", "img1");
    img.setAttribute("src", "assets/cartaoMaior.png");
    document.getElementById("bloco-imagem").appendChild(img);
    document.getElementById("bloco-imagem").appendChild(p);
    botoes[1].addEventListener("mouseenter", () => {
      botoes[1].classList.add("selecionado-em-cima");
    });
    botoes[1].addEventListener("mouseleave", () => {
      botoes[1].classList.remove("selecionado-em-cima");
    });
  } else {
    botoes[1].classList.remove("selecionado");
    document.getElementById("p1").remove();
    document.getElementById("img1").remove();
    botoes[1].addEventListener("mouseenter", () => {
      botoes[1].classList.remove("selecionado-em-cima");
    });
  }
}

function botao2() {
  const selecionado = document.getElementsByClassName("selecionado").length;
  if (selecionado == 0) {
    botoes[2].classList.add("selecionado");
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.setAttribute("id", "p2");
    p.textContent = "Entre no aplicativo do seu banco e efetue o pagamento";
    img.setAttribute("id", "img2");
    img.setAttribute("src", "assets/cartaoMaior.png");
    document.getElementById("bloco-imagem").appendChild(img);
    document.getElementById("bloco-imagem").appendChild(p);
    botoes[2].addEventListener("mouseenter", () => {
      botoes[2].classList.add("selecionado-em-cima");
    });
    botoes[2].addEventListener("mouseleave", () => {
      botoes[2].classList.remove("selecionado-em-cima");
    });
  } else {
    botoes[2].classList.remove("selecionado");
    document.getElementById("p2").remove();
    document.getElementById("img2").remove();
    botoes[2].addEventListener("mouseenter", () => {
      botoes[2].classList.remove("selecionado-em-cima");
    });
  }
}
