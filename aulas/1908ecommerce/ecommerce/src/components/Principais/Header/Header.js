import styles from "./Header.module.css";
import lupa from "../../../assets/lupa.png";
import coracao from "../../../assets/coracao.png";
import carrinho from "../../../assets/carrinho.png";

function Header() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.menu}>
          <h2>Exclusive</h2>
          <p className={styles.home}>Home</p>
          <p className={styles.p}>Contact</p>
          <p className={styles.p}>About</p>
          <p className={styles.p}>Sign Up</p>
        </div>
        <div className={styles.pesquisa}>
          <div className={styles.input}>
            What are you looking for?
            <img src={lupa} alt="" className={styles.lupa} />
          </div>
          <img src={coracao} alt="" className={styles.coracao}/>
          <img src={carrinho} alt="" className={styles.carrinho}/>
        </div>
      </div>
    </>
  );
}

export default Header;
