import styles from "./Escolha.module.css";

function Escolha(props) {
  function destaque() {
    if (props.destaque == "true") {
      return (
        <>
          <div className={styles.quadrado2}>
            <img src={props.icone} alt="" />
            <p>{props.texto}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.quadrado}>
            <img src={props.icone} alt="" />
            <p>{props.texto}</p>
          </div>
        </>
      );
    }
  }
  return <>{destaque()}</>;
}

export default Escolha;
