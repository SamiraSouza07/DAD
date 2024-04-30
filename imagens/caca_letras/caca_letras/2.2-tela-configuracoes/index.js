const opcao = document.getElementById("movimento");
const opcao1 = document.getElementById("movimento1");
const salvar = document.getElementById("salvar");
const voltar = document.getElementById("voltar");

voltar.addEventListener("click", (e) => {
  if (e.target == voltar) {
    window.location.href = "../index.html";
  }
});
const array2 = JSON.parse(localStorage.getItem("movimentacao"));
console.log(array2);
if (array2 != null) {
  if (array2[0] == "letras") {
    opcao.checked = true;
  } else {
    opcao1.checked = true;
  }
}
salvar.addEventListener("click", () => {
  const array = [];
  if (opcao.checked) {
    array.push(opcao.value);
    localStorage.setItem("movimentacao", JSON.stringify(array));
    window.alert("Alterações salvas com sucesso");
  } else {
    array.push(opcao1.value);
    localStorage.setItem("movimentacao", JSON.stringify(array));
    window.alert("Alterações salvas com sucesso");
  }
});
