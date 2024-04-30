const p = document.getElementById("personagem");
let topNum = 5;
let leftNum = 5;
const tops = [];
const lefts = [];
const letras = [];
const info = JSON.parse(localStorage.getItem("info"));
const movimentacao = JSON.parse(localStorage.getItem("movimentacao"));
const teclas = []
if(movimentacao[0] == "letras"){
  teclas.push("w")
  teclas.push("d")
  teclas.push("s")
  teclas.push("a")
}else{
  teclas.push("ArrowUp")
  teclas.push("ArrowRight")
  teclas.push("ArrowDown")
  teclas.push("ArrowLeft")
}
skin();
let nome = info[0].toLowerCase();
let tamanho = nome.length;
iniciar(nome, tamanho);


function iniciar(nome, tamanho) {
  document.addEventListener("keyup", (e) => {
    if (e.code == "Space") {
      for (let i = 0; i < nome.length; i++) {
        const id = "p" + (i + 1);
        const topP = Math.floor(Math.random() * 460);
        const leftP = Math.floor(Math.random() * 1230);
        let letra = nome[i];
        const p = document.createElement("p");
        p.textContent = letra;
        p.setAttribute(
          "style",
          "position:absolute;" +
            "top:" +
            topP +
            "px;" +
            "left:" +
            leftP +
            "px;" +
            "color: black;" +
            "font-family: Cochin;" +
            "font-size: 30px;"
        );
        p.setAttribute("id", id);
        tops.push(topP);
        lefts.push(leftP);
        letras.push(id);
        const body = document.getElementById("tela-jogo");
        body.appendChild(p);
      }
      movimentar();
    }
  });
}

function skin() {
  if (info[1] == "Florest") {
    p.classList.add("estilo1");
  } else if (info[1] == "Sky") {
    p.classList.add("estilo2");
  } else if (info[1] == "Strawberry") {
    p.classList.add("estilo3");
  } else if (info[1] == "Grape") {
    p.classList.add("estilo4");
  }

  if (info[2] == "Smile") {
    p.value= ":)"
  } else if (info[2] == "Sad") {
    p.value= ":("
  } else if (info[2] == "One eye") {
    p.value= "O)"
  } else if (info[2] == "Eyes close") {
    p.value= "X)"
  }else if (info[2] == "Nice") {
    p.value= ";)"
  }
}

function movimentar() {
  document.addEventListener("keydown", (e) => {
    if (e.key == teclas[0]) {
      topNum = parseInt(topNum) - 30;
      if (topNum < 0) {
        topNum = 5;
      }
      p.setAttribute("style", "top: " + topNum + "px; left: " + leftNum + "px");
      verificarColisao(letras, tops, lefts, topNum, leftNum);
    }
    if (e.key == teclas[1]) {
      leftNum = parseInt(leftNum) + 30;
      if (leftNum > 1250) {
        leftNum = 1250;
      }
      p.setAttribute("style", "left: " + leftNum + "px; top: " + topNum + "px");
      verificarColisao(letras, tops, lefts, topNum, leftNum);
    }
    if (e.key == teclas[2]) {
      topNum = parseInt(topNum) + 30;
      if (topNum > 470) {
        topNum = 470;
      }
      p.setAttribute("style", "top: " + topNum + "px; left: " + leftNum + "px");
      verificarColisao(letras, tops, lefts, topNum, leftNum);
    }
    if (e.key == teclas[3]) {
      leftNum = parseInt(leftNum) - 30;
      if (leftNum < 0) {
        leftNum = 5;
      }
      p.setAttribute("style", "left: " + leftNum + "px; top: " + topNum + "px");
      verificarColisao(letras, tops, lefts, topNum, leftNum);
    }
  });
}

function verificarColisao(letras, tops, lefts, top, left) {
  let nome = document.getElementById("nome-final");
  for (let i = 0; i < letras.length; i++) {
    if (top >= tops[i] - 29 && top <= tops[i] + 29) {
      if (left >= lefts[i] - 29 && left <= lefts[i] + 29) {
        const p = document.getElementById(letras[i]);
        if (p != null) {
          nome.textContent += p.textContent;
          p.remove();
        }
      }
    } else {
      if (left >= lefts[i] - 20 && left <= lefts[i] + 20) {
        if (top >= tops[i] - 20 && top <= tops[i] + 20) {
          const p = document.getElementById(letras[i]);
          if (p != null) {
            nome.textContent += p.textContent;
            p.remove();
          }
        }
      }
    }
    if (nome.textContent.length == info[0].length) {
      console.log(1);
      if (nome.textContent.toLowerCase() == info[0].toLowerCase()) {
        setTimeout(() => {
          window.location.href = "../4-tela-ganhou-perdeu/ganhou.html";
        }, 500);
      } else {
        setTimeout(() => {
          window.location.href = "../4-tela-ganhou-perdeu/perdeu.html";
        }, 500);
      }
    }
  }
}
