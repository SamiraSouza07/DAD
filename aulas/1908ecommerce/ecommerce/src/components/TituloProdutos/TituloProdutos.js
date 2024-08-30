import styles from "./TituloProduto.module.css";
import setaDireita from "../../assets/setaDireita.png";
import setaEsquerda from "../../assets/setaEsquerda.png";
import BotaoVermelho from "../BotaoVermelho/BotaoVermelho";

function TituloProduto(props) {
  function botao() {
    if (props.botao == "true") {
      return (
        <>
            <button className={styles.botao}>{props.texto}</button>
        </>
      );
    }
  }
  function botaoSetas() {
    if (props.botaoSeta == "true") {
      return (
        <>
          <div className={styles.containerSetas}>
            <div className={styles.bola}>
              <img src={setaEsquerda} alt="" />
            </div>
            <div className={styles.bola}>
              <img src={setaDireita} alt="" />
            </div>
          </div>
        </>
      );
    }
  }
  function cronometro() {
    if (props.cronometro == "true") {
      return (
        <>
          <div className={styles.cronometro}>
            <h1>
              <p>Days</p>
              {props.dias}
            </h1>
            <h1 className={styles.pontos}>:</h1>
            <h1>
              <p>Hours</p>
              {props.horas}
            </h1>
            <h1 className={styles.pontos}>:</h1>
            <h1>
              <p>Minutes</p>
              {props.minutos}
            </h1>
            <h1 className={styles.pontos}>:</h1>
            <h1>
              <p>Seconds</p>
              {props.segundos}
            </h1>
          </div>
        </>
      );
    }
  }
  return (
    <>
      <div className={styles.container}>
        <h1>{props.titulo}</h1>
        {cronometro()}
      </div>
      {botaoSetas()}
      {botao()}
    </>
  );
}
export default TituloProduto;
