//selecionando todos os temas
const temas = document.getElementsByClassName("temas");
// const botoes = document.getElementsByTagName("button");
// for (let i = 0; i < botoes.length; i++) {
//   botoes[i].addEventListener("mouseenter", () => {
//     botoes[i].classList.add("btn-copy-mouse-em-cima");
//   });
//   botoes[i].addEventListener("mouseleave", () => {
//     botoes[i].classList.remove("btn-copy-mouse-em-cima");
//   });
//   botoes[i].addEventListener("click", () => {
//     const content = document.getElementsByTagName("code")[i].textContent;
//     navigator.clipboard.writeText(content);
//     window.alert("Texto copiado!");
//   });
// }

//for para adicionar os eventos de click, mouseenter e mouseleave nos elementos da classe temas
for (let i = 0; i < temas.length; i++) {
  temas[i].addEventListener("mouseenter", () => {
    temas[i].classList.add("temas-mouse-em-cima");
  });
  temas[i].addEventListener("mouseleave", () => {
    temas[i].classList.remove("temas-mouse-em-cima");
  });
  temas[i].addEventListener("click", (e) => {
    if (e.target == temas[i] || e.target == temas[i].children[0]) {
      temas[i].children[1].classList.toggle("exp-invisivel");
    }
  });
}

//adicionando os eventos de mouseenter e mouseleave do elemento home
const home = document.getElementById("home");
home.addEventListener("mouseenter", () => {
  home.classList.add("icon-mouse-em-cima");
});
home.addEventListener("mouseleave", () => {
  home.classList.remove("icon-mouse-em-cima");
});

//adicionando os eventos de mouseenter e mouseleave do elemento git
const git = document.getElementById("git");
git.addEventListener("mouseenter", () => {
  git.classList.add("icon-mouse-em-cima");
});
git.addEventListener("mouseleave", () => {
  git.classList.remove("icon-mouse-em-cima");
});

const quadradosEnter = document.getElementsByClassName("quadrado")[0];
quadradosEnter.addEventListener("mouseenter", () => {
  //gerando cor aleatoria
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  quadradosEnter.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const quadradosOut = document.getElementsByClassName("quadrado")[1];
quadradosOut.addEventListener("mouseleave", () => {
  //gerando cor aleatoria
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  quadradosOut.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const input = document.getElementById("up");
input.addEventListener("keyup", () => {
  const valorCampo = input.value.toLowerCase();
  const tamanho = valorCampo.length;
  const frutas = document.getElementsByClassName("fruta");
  for (let i = 0; i < frutas.length; i++) {
    const conteudoFruta = frutas[i].textContent
      .toLowerCase()
      .substring(0, tamanho);
    if (valorCampo != conteudoFruta) {
      frutas[i].classList.add("invisivel");
      frutas[i].classList.remove("inline-block");
    } else {
      frutas[i].classList.remove("invisivel");
      frutas[i].classList.add("inline-block");
    }
  }
});

const input2 = document.getElementById("pesquisa-tema");
input2.addEventListener("keyup", () => {
  const valorCampo = input2.value.toLowerCase();
  const tamanho = valorCampo.length;
  const temas = document.getElementsByClassName("temas");
  for (let i = 0; i < temas.length; i++) {
    const conteudoTema = temas[i].children[0].textContent
      .toLowerCase()
      .substring(0, tamanho);
    if (valorCampo != conteudoTema) {
      temas[i].classList.add("invisivel");
      temas[i].classList.remove("block");
    } else {
      temas[i].classList.remove("invisivel");
      temas[i].classList.add("block");
    }
  }
});

const down = document.getElementById("down");
down.addEventListener("keydown", (e) => {
  let palavras = [
    "Amarelo",
    "Batata",
    "Três",
    "Pato",
    "Gato",
    "Papelaria",
    "Papel",
    "Professor",
    "Projeto",
    "Italo",
    "Notebook",
    "Mouse",
    "Fome",
  ];
  let texto = down.value;
  let tamanho = texto.length;
  texto = texto.charAt(0).toUpperCase() + texto.substring(1);
  if (tamanho >= 1) {
    for (let i = 0; i < palavras.length; i++) {
      if (texto == palavras[i].substring(0, tamanho)) {
        const msg = document.getElementById("msg");
        msg.textContent = "Clique a tecla espaço para escrever " + palavras[i];
        if (e.code == "Space") {
          down.value = palavras[i];
          msg.textContent = "";
        }
        if (e.key == "Backspace") {
          msg.textContent = "";
        }
      }
    }
  }
});
