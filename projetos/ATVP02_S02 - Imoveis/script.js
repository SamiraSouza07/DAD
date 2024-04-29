const secaoImoveis = document.querySelector(".secao-imoveis");

// capturando botao de filtros e modal de filtros
const filtros = document.querySelector(".modal-filtros");
const btnFiltros = document.querySelector(".btn-filtros");

// adicionando evento ao botao de filtros
btnFiltros.addEventListener("click", mostrarFiltros);

// fechando o modal window de filtros ao clicar na janela
filtros.addEventListener("click", esconderFiltros);

// capturando botao de favoritos e modal de favoritos
const modalFavoritos = document.querySelector(".modal-favoritos");
const btnFavoritos = document.querySelector(".btn-favoritos");

// fechando o modal window de favoritos  ao clicar na janela
modalFavoritos.addEventListener("click", esconderFavoritos);

// adicionando evento ao botao de favoritos
btnFavoritos.addEventListener("click", mostrarFavoritos);

// adicionando evento no range das vagas
const campoVagas = document.getElementById("vagas");
campoVagas.addEventListener("change", mostraRangeVagas);

// adicionando evento no range da metragem
const campoMetragem = document.getElementById("metragem");
campoMetragem.addEventListener("change", mostraRangeMetragem);

// adicionando evento no range de dormitorios
const campoDormitorio = document.getElementById("dormitorios");
campoDormitorio.addEventListener("change", mostraRangeDormitorios);

// adicionando evento no range de aluguel
const campoAluguel = document.getElementById("aluguel");
campoAluguel.addEventListener("change", mostraRangeAluguel);

// adicionando evento no range de total
const campoTotal = document.getElementById("total");
campoTotal.addEventListener("change", mostraRangeTotal);

// adicionando evento no botao de filtros
const btnAplicar = document.querySelector(".btn-aplicar");
btnAplicar.addEventListener("click", aplicarFiltros);

// atualizando campos
atualizaCampos();

// criando os imoveis
preencherListaImoveis(50);

// previne carregamento da pagina
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
});

// funcao para mostrar o filtro
function mostrarFiltros() {
  filtros.style.display = "flex";
}

// funcao para mostrar aba de favoritos
function mostrarFavoritos() {
  modalFavoritos.style.display = "flex";
}

// funcao para mostrar esconder os filtros
function esconderFiltros(e) {
  if (e.target == filtros) {
    filtros.style.display = "none";
  }
}

// funcao para mostrar esconder os filtros
function esconderFavoritos(e) {
  if (e.target == modalFavoritos) {
    modalFavoritos.style.display = "none";
  }
}

// funcao para favoritar
function favoritar(e) {
  // verifica se o botao contem a classe favoritado
  // classe nao e usada para estilzar
  if (e.target.classList.contains("favoritado")) {
    e.target.src = "assets/icones/favorito.svg";
  } else {
    e.target.src = "assets/icones/favorito-solid.svg";
  }
  e.target.classList.toggle("favoritado");
}

// funcao para criar um imovel
function criarImovel() {
  let imagemAleatoria = sorteioImagem();
  let tipoAleatorio = sorteioTipo();
  let metragem = sorteioMetragem();
  let dormitorio = sorteioDormitorio();
  let vagas = sorteioVagas();
  let aluguel = sorteioAluguel();
  let total = (aluguel + 500).toFixed(2);
  const imovel = document.createElement("article");
  imovel.className = "imovel";
  imovel.innerHTML = `<img
  class="foto-imovel"
  src="${imagemAleatoria}"
  alt=""
/>
<div class="conteudo-imovel">
  <p class="tipo">${tipoAleatorio}</p>
  <div>
    <h3 class="endereco-imovel">
      <img
        class="icone-card"
        src="assets/icones/localizacao.svg"
        alt=""
      />
      Avenida lorem ipsum
    </h3>
    <p class="cidade-imovel">São Paulo, SP</p>
  </div>
  <div class="imovel-espec">
    <p class="metragem">
      <img
        class="icone-card"
        src="assets/icones/metragem.svg"
        alt=""
      /><span class="metragem-valor">${metragem} m²</span>
    </p>
    <p class="dormitorios">
      <img
        class="icone-card"
        src="assets/icones/dormitorio.svg"
        alt=""
      /> <span class = "dormitorios-valor">${dormitorio} dorm.<span></p>
    <p class="vagas">
      <img
        class="icone-card"
        src="assets/icones/garagem.svg"
        alt=""
      />${vagas} vagas
    </p>
  </div>
  <div class="descricao-aluguel">
    <div>
      <p class="aluguel">
        Aluguel <span class="aluguel-valor">R$${aluguel}</span>
      </p>
      <p class="total">
        Total <span class="total-valor">R$${total}</span>
      </p>
    </div>
    <img class="icone-fav" src="assets/icones/favorito.svg" alt="" />
  </div>
</div>`;
  secaoImoveis.appendChild(imovel);

  // atribuindo evento aos botoes
  eventoFavoritar();
}

// funcao para sorteio de imagem aleatoria
function sorteioImagem() {
  let numero = Math.floor(Math.random() * 19 + 1);
  let url = `assets/imagens/imovel${numero}.jpg`;

  return url;
}

// funcao para sorteio de tipo
function sorteioTipo() {
  const tipos = ["Casa", "Kitnet", "Apartamento"];
  let numero = Math.floor(Math.random() * 3);
  let tipo = tipos[numero];

  return tipo;
}

// funcao para sorteio de metragem
function sorteioMetragem() {
  let metragem = Math.floor(Math.random() * 100 + 5);

  return metragem;
}

// funcao para sorteio de numero de dormitorios
function sorteioDormitorio() {
  let dormitorio = Math.floor(Math.random() * 5 + 1);

  return dormitorio;
}

// funcao para sorteio de numero de vagas
function sorteioVagas() {
  let vagas = Math.floor(Math.random() * 4);

  return vagas;
}

// funcao para sorteio do aluguel
function sorteioAluguel() {
  let aluguel = Math.random() * 5000 + 700;

  return Number(aluguel.toFixed(2));
}

// funcao para atribuir evento de favoritar aos botoes
function eventoFavoritar() {
  // adicionando evento de clique nos btns de favoritos
  const btnsFav = document.querySelectorAll(".icone-fav");
  for (let i = 0; i < btnsFav.length; i++) {
    btnsFav[i].addEventListener("click", favoritar);
  }
}

// funcao para apresentar o numero de um range de vagas
function mostraRangeVagas() {
  const numVagas = document.getElementById("vagas").value;
  document.getElementById("numVagas").textContent = numVagas;
}

// funcao para apresentar o numero de um range de metragem
function mostraRangeMetragem() {
  const numMetragem = document.getElementById("metragem").value;
  document.getElementById("numMetragem").textContent = numMetragem + " m²";
}

// funcao para apresentar o numero de um range de dormitorios
function mostraRangeDormitorios() {
  const numDormitorios = document.getElementById("dormitorios").value;
  document.getElementById("numDormitorios").textContent = numDormitorios;
}

// funcao para apresentar o numero de um range de valor de aluguel
function mostraRangeAluguel() {
  const valorAluguel = document.getElementById("aluguel").value;
  document.getElementById("valorAluguel").textContent = "R$ " + valorAluguel;
}

// funcao para apresentar o numero de um range de valor de aluguel
function mostraRangeTotal() {
  const valorTotal = document.getElementById("total").value;
  document.getElementById("valorTotal").textContent = "R$ " + valorTotal;
}

// funcao para atualizar campos
function atualizaCampos() {
  mostraRangeAluguel();
  mostraRangeDormitorios();
  mostraRangeMetragem();
  mostraRangeTotal();
  mostraRangeVagas();
}

// funcao para aplicar filtros
function aplicarFiltros() {
  filtros.style.display = "none";
}

// funcao para criar diversos imoveis
function preencherListaImoveis(numero) {
  for (let i = 0; i < numero; i++) {
    criarImovel();
  }
}
