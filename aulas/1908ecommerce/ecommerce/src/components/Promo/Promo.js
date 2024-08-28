import styles from "./Promo.module.css"
import seta from "../../assets/icon2.png"

function Promo(){
    return(
        <>
        <div className={styles.fundo}>
            <p className={styles.mensagem}>Summer Sale For All Swin Suits And Free Express Delivery - OFF 50%!<a href="">Shop Now</a></p>
            <div className={styles.container}>
                <p>English</p>
                <img src={seta} className={styles.img} alt="" />
            </div>
        </div>
        </>
    )
}

export default Promo;