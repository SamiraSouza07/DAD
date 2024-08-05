const opcoes = document.getElementsByClassName("opcao");
const opcoes1 = document.getElementsByClassName("opcao1");
const jogar = document.getElementById("jogar");
const voltar = document.getElementById("voltar");

voltar.addEventListener("click", (e) => {
  if (e.target == voltar) {
    window.location.href = "../index.html";
  }
});
let estilo;
let acessorio;
let qnt = 0;
for (let i = 0; i < opcoes.length; i++) {
  opcoes[i].addEventListener("click", (e) => {
    if (
      e.target == opcoes[i] ||
      e.target == opcoes[i].children[0] ||
      e.target == opcoes[i].children[1]
    ) {
      const selecionado = document.getElementsByClassName("selecionado").length;
      if (selecionado == 0) {
        opcoes[i].classList.add("selecionado");
      } else {
        opcoes[i].classList.remove("selecionado");
      }
      // const selecionado2 =
      //   document.getElementsByClassName("selecionado").length;
      // if (selecionado2 == 1) {
      //   jogar.classList.remove("invisivel");
      //   jogar.classList.add("button");
      // } else {
      //   jogar.classList.add("invisivel");
      //   jogar.classList.remove("button");
      // }
    }
    qnt = document.getElementsByClassName("selecionado").length;
    estilo =
      document.getElementsByClassName("selecionado")[0].children[0].textContent;
  });
}

for (let i = 0; i < opcoes1.length; i++) {
  opcoes1[i].addEventListener("click", (e) => {
    if (
      e.target == opcoes1[i] ||
      e.target == opcoes1[i].children[0] ||
      e.target == opcoes1[i].children[1]
    ) {
      const selecionado = document.getElementsByClassName("selecionado").length;
      if (selecionado == 1) {
        opcoes1[i].classList.add("selecionado");
      } else {
        opcoes1[i].classList.remove("selecionado");
      }
      const selecionado2 =
        document.getElementsByClassName("selecionado").length;

      const nome = document.getElementById("nome").value.textContent;
      if (nome != "" && selecionado2 == 2) {
        jogar.classList.remove("invisivel");
        jogar.classList.add("button");
      } else {
        jogar.classList.add("invisivel");
        jogar.classList.remove("button");
      }
    }
    qnt = document.getElementsByClassName("selecionado").length;
    acessorio =
      document.getElementsByClassName("selecionado")[1].children[0].textContent;
  });
}

jogar.addEventListener("mouseenter", () => {
  jogar.classList.add("por-cima");
});
jogar.addEventListener("mouseleave", () => {
  jogar.classList.remove("por-cima");
});
jogar.addEventListener("click", (e) => {
  if (e.target == jogar) {
    const nome = document.getElementById("nome").value;
    const info = [nome, estilo, acessorio];
    localStorage.setItem("info", JSON.stringify(info));
    window.location.href = "../3-tela-jogo/index.html";
  }
});
