//pegando todos os carros
const carrosGeral = document.getElementsByClassName("card-veiculo");

//pegando o input de pesquisar o 'nome do carro'
const campoPesquisaNome = document.getElementById("busca");

//pegando o botão de pesquisa
const botaoBuscar = document.getElementById("botao-busca");

//filtrando os carros ao clicar o botão a partir do input de pesquisa
botaoBuscar.addEventListener("click", buscarTexto);

//pegando o form do input
const form = document.getElementsByTagName("form")[0];

//interrompendo o evento de recarregar a pagina na tecla enter
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//filtrando os carros ao apertar a tecla enter (e backspace) a partir do input de pesquisa
campoPesquisaNome.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    buscarTexto();
  }
  if (e.key == "Backspace") {
    buscarTexto();
  }
});

const marca = document.getElementById("marca");
marca.addEventListener("change", () => {
  for (let i = 0; i < carrosGeral.length; i++) {
    if (carrosGeral[i].children[1].children[0].textContent == marca.value) {
      carrosGeral[i].classList.remove("invisivel");
    } else {
      carrosGeral[i].classList.add("invisivel");
    }
  }
});

const combustivel = document.getElementById("combustivel");
combustivel.addEventListener("change", () => {
  for (let i = 0; i < carrosGeral.length; i++) {
    if (
      carrosGeral[i].children[2].children[1].textContent.includes(
        combustivel.value
      )
    ) {
      carrosGeral[i].classList.remove("invisivel");
    } else {
      carrosGeral[i].classList.add("invisivel");
    }
  }
});

const automatico = document.getElementById("automatico");
const manual = document.getElementById("manual");
if (automatico.checked) {
  console.log(carrosGeral[i].children[2].children[0].textContent);
} else if (manual.checked) {
}

function buscarTexto() {
  const conteudoInputPesquisa = campoPesquisaNome.value
    .toLocaleLowerCase()
    .trim();
  for (let i = 0; i < carrosGeral.length; i++) {
    if (
      !carrosGeral[i].textContent
        .toLocaleLowerCase()
        .includes(conteudoInputPesquisa)
    ) {
      carrosGeral[i].classList.add("invisivel");
    } else {
      carrosGeral[i].classList.remove("invisivel");
    }
  }
}
