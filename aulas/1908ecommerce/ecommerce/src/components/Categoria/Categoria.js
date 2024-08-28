import styles from "./Categoria.module.css";

function Categoria(props) {
  return (<>

  <div className={styles.fundo}>
    <div className={styles.retanguloVermelho}></div>
    <h2>{props.titulo}</h2>
  </div>
  
  </>);
}

export default Categoria