import styles from "./Anuncio.module.css";
import caixaSom from "../../assets/caixaSom.png"

function Anuncio() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.esquerda}>
          <div className={styles.categoria}>
            <p>Categories</p>
          </div>
          <div className={styles.titulo}>
            <h1>Enhance Your Music Experience</h1>
          </div>
          <div className={styles.containerBolinhas}>
            <div className={styles.bolinha}>
              <p>23</p>
              <p>Hours</p>
            </div>
            <div className={styles.bolinha}>
              <p>05</p>
              <p>Days</p>
            </div>
            <div className={styles.bolinha}>
              <p>59</p>
              <p>Minutes</p>
            </div>
            <div className={styles.bolinha}>
              <p>35</p>
              <p>Seconds</p>
            </div>
          </div>
          <div>
            <button className={styles.botao}>Buy Now!</button>
          </div>
        </div>
        <div className={styles.direita}>
          <img src={caixaSom} alt="" />
        </div>
      </div>
    </>
  );
}
export default Anuncio;
