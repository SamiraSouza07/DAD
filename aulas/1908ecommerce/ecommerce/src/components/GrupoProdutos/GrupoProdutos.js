import styles from "./GrupoProdutos.module.css";
import Produto from "../Produto/Produto";

function GrupoProdutos() {
  return (
    <>
      <div className={styles.container}>
        <Produto
          avaliacao="5"
          foto="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQ4iL~dIG22mMjE1wgqG5JBp~TSj~o1Ww0njHhHarm4rpBWB-yQH53bNqb~u5ZhetTTE0GHNc3tW-SWTZHRU1UYd2ZJjPZxJ5sp7V~2M6Ep1L-xNJgA-ck6xCPjRNMYwkJcDEDa-dobCtVgR5kSePkD2YltyH1aK861q605weQPMtpej8DHsnEV52XARAlEGoNdK3V5ZlK0KrYaMm83w5yZnM6wWc09l~seu5YMVKHc8RN5Wl6mYB5Xww1-cSBr-DQ1G~CuzyOe58h6xIOenussjbXaPK4qaExWfxPutel6-ZyKAzvQ5zY~Go5tXw~2RVZA-gU7F7DLLJeXg5S9HPA__"
          nome="HAVIT HV-G92 Gamepad"
          preco="$120"
          precoAntigo="$160"
          promocao="-40%"
        />
        <Produto
          avaliacao="4"
          mensagem="true"
          texto="Add To Cart"
          foto="https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RM07aWZJdhhIWI3l8ZfEJA6KojXKfqF~D9KT8BBx1KtMbm45rUrwE077nKQxjK9qbecgnxw9dyxLrO8MB7mQlZ2iGaDx3jhklf~bQhV4xrv2DBZs0NZoXLDMRt2Ulbto-p4gou5fdarTv-xt39vTHZ-B3AB-OfwlvWYEfLYNljAUxGtJ4Xo-bBlpmyvm3nSxvd8UHUUV06hhlvy92VDkT8p9T3Pwe4bIl~ewL7TG0M3Ue6ABIpcfFAv6CCbpIF2Dryn20mSJYS8JQhOIhLcKgeLb0ePxudDjQr60Ikkfd1GZOoyVP-CSW6buGcRYAGPueBEpTT1BsF6gGLnY-BfEDg__"
          nome="AK-900 Wired Keyboard"
          preco="$960"
          precoAntigo="$1160"
          promocao="-35%"
        />
        <Produto
        avaliacao="5"
          foto="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H5Ods4ristFVj6V9yIQ5cP75wiNYZkhf2fokP7a-LxLGv4pSN8eS1nT1kfRdLVz0JEeFvh31wODXY~3zINJzdIUQEBY9A9ek2UYfklfK629T8-dXeQrAdC2MLyogpoPU5wsiCIhydefg3Z8DpV98CzCzsFcyW9Hkz8vl7AAHj0evm8hUlfP7hHl6YCHsHJszLcWWymXbxZjtAmmbJhYPQ0Z91R6iz8eOlWlZ4sOSInrG4~oOctDHNdHb9fB74pRT4eZG~gMC4EynVJo-RK16s3ZstFdWCVXL2Z2CWGXQ2AU4klsMHgQmSYOv8rMiLX3MYTYkc6~XCzUnd8mVZkMwag__"
          nome="IPS LCD Gaming Monitor"
          preco="$370"
          precoAntigo="$400"
          promocao="-30%"
        />
        <Produto
        avaliacao="2.5"
          foto="https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m34LdWAB2UGWXEUmdLxVaT5ww-FcsFE~FtUBxUscbDWzDWRfCmnbQjERLg~VgWUb1PaqI~Kr6nGIQPqe1B6JnKw0a8kOGrdIrhA6t041duC829TTgqj18Wc0a7pDsqN89byPlsYV9nd~h2MJu5R05IuSFy-whC2zop3yES4BAmdm8lfePJUnfFsTsTycr0poYvPGIcTeRM6npA5BsytBU~A4L6Nu~c1hlafp1RZ8ETcXOlOeSKmyIpdZ7qrZPbebFFKD48AsKU7FFzslu47jPZYyV594pwICbMrEIWW1fevmutAK0PgeTaRTMj~CPx4mvs4cL1a-JJN5EFL9eF2SoQ__"
          nome="S-Series Comfort Chair"
          preco="$375"
          precoAntigo="$400"
          promocao="-25%"
        />
      </div>
    </>
  );
}
export default GrupoProdutos;
