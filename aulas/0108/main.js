const btn = document.getElementsByTagName("button")[0];
const btn1 = document.getElementsByTagName("button")[1];
const div = document.getElementsByTagName("div")[0];

btn.addEventListener("click", (e) => {
  if (e.target == btn) {
    window.confirm("Olá, tudo bem???");
  }
});

btn1.addEventListener("click", (e) => {
  if (e.target == btn1) {
    window.alert("oiiiii");
  }
});

div.addEventListener("click", (e) => {
  if (e.target == div) {
    window.alert("Clica na caixa não");
  }
});
