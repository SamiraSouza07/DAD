import styles from "./Footer.module.css";
import qrcode from "../../../assets/Qr Code.png"
import appStore from "../../../assets/downloadAppStore.png"
import appGooglePlay from "../../../assets/downloadGooglePlay.png"
import facebook from "../../../assets/Icon-Facebook.png"
import twitter from "../../../assets/Icon-Twitter.png"
import linkedin from "../../../assets/Icon-Linkedin.png"
import instagram from "../../../assets/icon-instagram.png"
import send from "../../../assets/icon-send.png"

function Footer() {
  return (
    <>
      <div className={styles.fundo}>
        <div className={styles.item}>
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className={styles.input}>
            <p>Enter your email</p>
            <img src={send} alt="" />
          </div>
        </div>
        <div className={styles.item}>
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className={styles.item}>
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login/Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className={styles.item}>
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className={styles.item}>
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className={styles.containerFotos}>
                <img className={styles.qr} src={qrcode} alt="" />
                <div className={styles.containerFotos2}>
                    <img className={styles.store} src={appStore} alt="" />
                    <img className={styles.play} src={appGooglePlay} alt="" />
                </div>
            </div>
            <div className={styles.containerFotosPequenas}>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
