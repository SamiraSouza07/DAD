import styles from "./Produto.module.css";
import coracao from "../../assets/coracao.png";
import olho from "../../assets/olho.png";
import estrelaCompleta from "../../assets/estrelaCompleta.png";
import estrelaMetade from "../../assets/estrelaMetade.png";
import estrelaVazia from "../../assets/estrelaVazia.png";
let estrelas = [];
function Produto(props) {
  function cores() {
    if (props.cores == "true") {
      return (
        <>
          <div className={styles.containerCirculos}>
            <div
              style={{ backgroundColor: props.cor1 }}
              id="circulo1"
              className={styles.circuloPrincipal}
            ></div>
            <div
              style={{ backgroundColor: props.cor2 }}
              id="circulo2"
              className={styles.circulo}
            >
              o
            </div>
          </div>
        </>
      );
    }
  }

  function promocao() {
    if (props.promocao) {
      return (
        <>
          <p className={styles.promocao}>{props.promocao}</p>
        </>
      );
    } else if (props.novo == "true") {
      return <p className={styles.novo}>NEW!</p>;
    } else {
      return <p className={styles.promocao2}></p>;
    }
  }
  function mensagem() {
    if (props.mensagem == "true") {
      return (
        <>
          <div className={styles.mensagem}>
            <h1>{props.texto}</h1>
          </div>
        </>
      );
    }
  }
  function avaliacao() {
    avaliacao = parseFloat(props.avaliacao);
    estrelas = [];
    for (let i = 0; i < 5; i++) {
      if (avaliacao >= 1) {
        estrelas.push(<img className={styles.estrela} src={estrelaCompleta} />);
        avaliacao = avaliacao - 1;
      } else if (avaliacao > 0) {
        estrelas.push(<img src={estrelaMetade} />);
        avaliacao = 0;
      } else if (estrelas.length < 5 && avaliacao == 0) {
        estrelas.push(<img className={styles.estrela} src={estrelaVazia} />);
      }
    }
    return <> {estrelas}</>;
  }
  return (
    <>
      <div className={styles.card}>
        <div className={styles.containerFoto}>
          {promocao()}
          <div className={styles.redondo}>
            <img src={coracao} alt="" />
          </div>
          <div className={styles.redondo}>
            <img src={olho} alt="" />
          </div>
          <img src={props.foto} alt="" />
          {mensagem()}
        </div>
        <div className={styles.info}>
          <h3>{props.nome}</h3>
          <div className={styles.preco}>
            <p>{props.preco}</p>
            <p>{props.precoAntigo}</p>
          </div>
          <div className={styles.estrelas}>
            {avaliacao()}
            <p>({props.qntAvaliacao})</p>
          </div>
          {cores()}
        </div>
      </div>
    </>
  );
}

export default Produto;
