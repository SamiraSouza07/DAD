import styles from "./Main.module.css";
import Carrossel from "../../Carrossel/Carrossel.js";
import Categoria from "../../Categoria/Categoria.js";
import GrupoProdutos from "../../GrupoProdutos/GrupoProdutos.js";
import TituloProduto from "../../TituloProdutos/TituloProdutos.js";
import Divisor from "../../Divisor/Divisor.js";
import BotaoVermelho from "../../BotaoVermelho/BotaoVermelho.js";
import Anuncio from "../../Anuncio/Anuncio.js";
import Grid from "../../Grid/Grid.js";
import Info from "../../Info/Info";

function Main() {
  return (
    <>
      <Carrossel />
      <Categoria titulo="Today's" />
      <TituloProduto
        titulo="Flash Sales"
        cronometro="true"
        dias="03"
        horas="23"
        minutos="19"
        segundos="56"
        botaoSeta="true"
      />
      <GrupoProdutos numero="1" />
      <BotaoVermelho texto="View All Products" />
      <Divisor />
      <Categoria titulo="Categories" />
      <TituloProduto titulo="Browse By Category" botaoSeta="true" />
      <GrupoProdutos numero="3" />
      <Divisor />
      <Categoria titulo="This Month" />
      <TituloProduto
        titulo="Best Selling Products"
        texto="View All"
        botao="true"
      />
      <GrupoProdutos numero="2" />
      <Anuncio />
      <Categoria titulo="Our Products" />
      <TituloProduto titulo="Explore Our Products" botaoSeta="true" />
      <GrupoProdutos numero="4" />
      <GrupoProdutos numero="5" />
      <BotaoVermelho texto="View All Products" />
      <Categoria titulo="Featured" />
      <TituloProduto titulo="New Arrival" />
      <Grid />
      <Info />
      <GrupoProdutos numero="6"/>
    </>
  );
}

export default Main;
