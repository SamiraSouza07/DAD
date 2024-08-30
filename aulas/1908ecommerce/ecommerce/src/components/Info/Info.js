import styles from "./Info.module.css";
import check from "../../assets/Icon-secure.png"
import service from "../../assets/Icon-Customer service.png"
import delivery from "../../assets/icon-delivery.png"

function Info() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.circulo}><img src={delivery} alt="" /></div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className={styles.item}>
          <div className={styles.circulo}><img src={service} alt="" /></div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className={styles.item}>
          <div className={styles.circulo}><img src={check} alt="" /></div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
}

export default Info;
