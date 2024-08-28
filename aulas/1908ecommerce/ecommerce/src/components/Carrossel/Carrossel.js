import styles from "./Carrossel.module.css";
import logoApple from "../../assets/logoApple.png"
import setDireita from "../../assets/setaDireita.png"

function Carrossel() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.esquerda}>
          <div className={styles.linha1}>
            <img src={logoApple} className={styles.apple} alt="" />
            <p className={styles.modelo}>iPhone 14 Series</p>
          </div>
          <div className={styles.linha2}>
            <h1 className={styles.off10}>Up to 10% off Voucher</h1>
          </div>
          <div className={styles.linha3}>
            <p>Shop Now</p>
            <img src={setDireita} alt="" />
          </div>
        </div>
        <div>
          <img
            className={styles.celular}
            src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q4kbRQgpQH1F8innipUoKpSHb0TCT7~ihOt2q9N9XRkIdhoV0FE5RELMndnLRVbsj3dQQGlKWa~NGZjz4aPRLOmRDmbcZcBbElTzQWtxRiS10smO0xlfojjrJY9lUxhun3iLmylTxnupZ8Anu2DXFZnL~pAikR1wLo~rmx2H6f6LRQcTFBULn2lTmGR~h09KNxqlITnuhup18Wefd-k9bHY0CUAdNsoTKnVdHEXLaLtyg~eb2TGja15PD03258RN4vQITz-81qH9kMLjSYqM27tKoAyL-r6NQT~tp2rV6EH-gKnno8SerDmkkl3DqW1XCJPYNnJju2TWqN37w3y2vw__"
            alt=""
          />
        </div>
      </div>
      <div className={styles.containerBolinhas}>
        <div className={styles.bolinha}></div>
        <div className={styles.bolinha}></div>
        <div className={styles.bolinhaDestaque}></div>
        <div className={styles.bolinha}></div>
        <div className={styles.bolinha}></div>
      </div>
    </>
  );
}

export default Carrossel;
