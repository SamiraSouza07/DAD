import styles from "./GrupoProdutos.module.css";
import Produto from "../Produto/Produto";
import Escolha from "../Escolha/Escolha";
import celular from "../../assets/Category-CellPhone.png";
import computador from "../../assets/Category-Computer.png";
import relogio from "../../assets/Category-SmartWatch.png";
import camera from "../../assets/Category-Camera.png";
import fone from "../../assets/Category-Headphone.png";
import jogo from "../../assets/Category-Gamepad.png";
import setaCima from "../../assets/setaCima.png";

function GrupoProdutos(props) {
  function um() {
    if (props.numero == "1") {
      return (
        <>
          <Produto
            qntAvaliacao="88"
            avaliacao="5"
            foto="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQ4iL~dIG22mMjE1wgqG5JBp~TSj~o1Ww0njHhHarm4rpBWB-yQH53bNqb~u5ZhetTTE0GHNc3tW-SWTZHRU1UYd2ZJjPZxJ5sp7V~2M6Ep1L-xNJgA-ck6xCPjRNMYwkJcDEDa-dobCtVgR5kSePkD2YltyH1aK861q605weQPMtpej8DHsnEV52XARAlEGoNdK3V5ZlK0KrYaMm83w5yZnM6wWc09l~seu5YMVKHc8RN5Wl6mYB5Xww1-cSBr-DQ1G~CuzyOe58h6xIOenussjbXaPK4qaExWfxPutel6-ZyKAzvQ5zY~Go5tXw~2RVZA-gU7F7DLLJeXg5S9HPA__"
            nome="HAVIT HV-G92 Gamepad"
            preco="$120"
            precoAntigo="$160"
            promocao="-40%"
          />
          <Produto
            qntAvaliacao="75"
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
            qntAvaliacao="99"
            avaliacao="5"
            foto="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H5Ods4ristFVj6V9yIQ5cP75wiNYZkhf2fokP7a-LxLGv4pSN8eS1nT1kfRdLVz0JEeFvh31wODXY~3zINJzdIUQEBY9A9ek2UYfklfK629T8-dXeQrAdC2MLyogpoPU5wsiCIhydefg3Z8DpV98CzCzsFcyW9Hkz8vl7AAHj0evm8hUlfP7hHl6YCHsHJszLcWWymXbxZjtAmmbJhYPQ0Z91R6iz8eOlWlZ4sOSInrG4~oOctDHNdHb9fB74pRT4eZG~gMC4EynVJo-RK16s3ZstFdWCVXL2Z2CWGXQ2AU4klsMHgQmSYOv8rMiLX3MYTYkc6~XCzUnd8mVZkMwag__"
            nome="IPS LCD Gaming Monitor"
            preco="$370"
            precoAntigo="$400"
            promocao="-30%"
          />
          <Produto
            qntAvaliacao="99"
            avaliacao="2.5"
            foto="https://s3-alpha-sig.figma.com/img/288d/a330/273c46e1c3dc0a8915c4b031d0345347?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m34LdWAB2UGWXEUmdLxVaT5ww-FcsFE~FtUBxUscbDWzDWRfCmnbQjERLg~VgWUb1PaqI~Kr6nGIQPqe1B6JnKw0a8kOGrdIrhA6t041duC829TTgqj18Wc0a7pDsqN89byPlsYV9nd~h2MJu5R05IuSFy-whC2zop3yES4BAmdm8lfePJUnfFsTsTycr0poYvPGIcTeRM6npA5BsytBU~A4L6Nu~c1hlafp1RZ8ETcXOlOeSKmyIpdZ7qrZPbebFFKD48AsKU7FFzslu47jPZYyV594pwICbMrEIWW1fevmutAK0PgeTaRTMj~CPx4mvs4cL1a-JJN5EFL9eF2SoQ__"
            nome="S-Series Comfort Chair"
            preco="$375"
            precoAntigo="$400"
            promocao="-25%"
          />
        </>
      );
    }
  }
  function dois() {
    if (props.numero == "2") {
      return (
        <>
          <Produto
            nome="The north coat"
            preco="$260"
            precoAntigo="$360"
            avaliacao="5"
            qntAvaliacao="65"
            foto="https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ck5NgBBWvB2gHd~BSprnhRocvLMX~lP7wMqz74GzeH5JpKZ9xzz-iuarM6887Yj~P0J~Y3-3ckbOMGnTn0VxHdNcul6oM6MJhOT9BEwSTxfwnMtMNU1hlF1HeRu-kb71XEeR8UkEywzbVGgIkn7miZ8kdnpC6nku4~7HaU-oY2C4m0Vt~r23LZO447UaT1M1ilS69tmBd8Dh41FljxxOfmG64tj2hbmTh8JZNACoXns8w~ZCD~7ZHCIqKmQ~O0GlMUBdgQY1BxeRWMV~C06SD62NdqXdLFJZpe38AvwG0hbuRCJeph9uDwtLv~C5Yy0chixk6hogfapRGw7qmO52Cg__"
          />
          <Produto
            nome="Gucci duffle bag"
            preco="$960"
            precoAntigo="$1160"
            avaliacao="4.5"
            qntAvaliacao="65"
            foto="https://s3-alpha-sig.figma.com/img/4f3c/a1d1/2722dbdf98f25179d3c0b785988c513d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bqYeWt321hsZE0vRBeUV7944mMb-eAAhVZttzUPu21~VLuP98iCqIQdCt2CCqvyJEqu8BSoFKmVpnqryQQpFFzCYGxU1S5f5YRmC~C1-fwuHEtFLoJvv3Bpqnc0rONTuf89I2cD9gQtDgh9FEblFNEmhJcgr~LGSFNdXzCL7T-pBsMdGexJf5wkZtScV-CcxXbsXD7e~ZzGg4rdYmcCqatZFIKaNSKiMaFIWIbepfeyo-24Ii~hNOi55jJULICpi24t4xe5npAL98syr0ICUBBn5r7CX3t08AS~drLr9sYjo5wIA821hYqP7Oa5rsPl97X9zNs8oVOTEvKOLSiAC~g__"
          />
          <Produto
            nome="RGB liquid CPU Cooler"
            preco="$160"
            precoAntigo="$170"
            avaliacao="4.5"
            qntAvaliacao="65"
            foto="https://s3-alpha-sig.figma.com/img/6739/d39d/c218c97b645d616c8188a4f2e6aaf84b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdmZI14bIDIVSg5373i71IbwrZeGQ0DEf~pJzRde-yQFaAs~sy8n97-Wc0lXfaTgnoZTP1dcscGnPdrv1JACTCOsHY8Xufbo5JN4M1K~lbu3FLbcg~-Vfn49PmKmn2J33-xVz4D23zVwve3mqc~zNhWfJCWv2WZvrX~zYzF01svtga69HMwPHZWBZ-JSh2fvSghkZNu~LYJ2CUzTcgvH~YWlC6nn20X7JBMW9NeBWf79hC1j8f3u~nPJrhyd7mstDbxOF85Mdtj~95cWIoHiheR-o5h3hy39nUcBLHNmcW0BnQE8l0TMvlEb6GV3-YoWpW36NzKOIeOLA0-h8RCj1w__"
          />
          <Produto
            nome="Small BookSelf"
            preco="$360"
            avaliacao="5"
            qntAvaliacao="65"
            foto="https://s3-alpha-sig.figma.com/img/e86f/6e87/2757d20a14861e2e0ebd4e9889693f59?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BrzIE~61wirCYNw4Ls0dw5IVe0BR4qDF9Jz1H7cSIm7-9bye48lQtUc~F8a55GPQjbzmXsO~eH~b7W2J14Ixzgr219WnPOmUj4GF9b5HNtNiowG7a06jsjed3cL04UGI1i7L1TylrBHlzpEIsnzUSmYfHCoU~UBjvZJDOP3XVW4TcAlSDOxehgF9~iQS~Z93gfrZeIC90zeZvs0eJMmtoAJt~PJKzCbg8dxmY0F4I5u-nKcB459-iceP795SMzytCzyXnpQ1yTEtcSO-CaRBv5zGdW4j3gvxFmV~IHRKhjSEAX5mb2I18bP0rxesCLFk14NSapDN3qdWog9ooFeBSA__"
          />
        </>
      );
    }
  }
  function tres() {
    if (props.numero == "3") {
      return (
        <>
          <Escolha texto="Phones" icone={celular} />
          <Escolha texto="Computers" icone={computador} />
          <Escolha texto="SmartWatch" icone={relogio} />
          <Escolha texto="Camera" destaque="true" icone={camera} />
          <Escolha texto="HeadPhones" icone={fone} />
          <Escolha texto="Gaming" icone={jogo} />
        </>
      );
    }
  }
  function quatro() {
    if (props.numero == "4") {
      return (
        <>
          <Produto
            foto="https://www.pedigree.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2401/files/2022-10/7896029069141-product-image-1.png"
            nome="Breed Dry Dog Food"
            preco="$100"
            avaliacao="3"
            qntAvaliacao="35"
          />
          <Produto
            foto="https://s3-alpha-sig.figma.com/img/e608/92a4/f0a3d5d144dce622c7338ec5be12908f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3dAK04rPyBWscfwhkxB9N9ZEZqUyHpA6Hf4Oto8N5-tmneQ90MV7zSD0oIvgHThCXuDT3DA3aO7~ttCHnk-XymEq1hg0K6Ls7wJYewExbY5XzUHKRiyAsXnYQfblq29JuLViZKLLEoP~PsobkZCVc6naJiEpiIOxchuQxjaGfLJpI9uz094FT~hyi4eeU~CYjo7PI2iXpSFSKVg2drJlyM2C~ypt1jDdZ78k~TUb6WVDOiayw-u1Ztx7wEQ0V6eZwMoQZO5yGPlaL7Y4S7nDBkeoACxKVW6HUv59FjOTc0-Bal3ADsdhQk0kCfVhCDV1fhdNNqTxhzwTd-rlJ6W7A__"
            nome="CANON EOS DSLR Camera"
            preco="$360"
            avaliacao="4"
            qntAvaliacao="95"
            mensagem="true"
            texto="Add To Cart"
          />
          <Produto
            foto="https://s3-alpha-sig.figma.com/img/203b/e522/b7b02d10672f6f6147762cf52bfcfc54?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qi9xgqpoqEGp-6lhbuiRSWjWdzYYGa6R0cOuY7qcRpxWFwZeV2i0MXnqTlXwVQjCEYGcBkS82dQQIO4tblfKJuyqnv4LMiJtrGCuI9wA6rnC~WVx6ePLHTZleOzaZ4CvpoTa-0kUcl5HqPqa~g7IDfC2Gf-WqwgV8ja-9mEV7prYdNECaLT-ozcK50ORrWFMtIs5StK~cVQz~4EYrWBu3Iww5qpv-tblhyNXH3cxoW6LNU5m8R1k~xPH22y24W7tz0HaQxLPgw53CI0ibmfDCDtqEunD70cCKac2pcSRtmJV0HPtSf-frVRh4hQgit6p9GQwrWrQplux4zqRaLYoBA__"
            nome="ASUS FHD Gaming Laptop"
            preco="$700"
            avaliacao="5"
            qntAvaliacao="325"
          />
          <Produto
            foto="https://s3-alpha-sig.figma.com/img/e7bd/d116/62ea1dfc2d615a5bb054e139a764f306?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SY6xq3HYW-jywHZ6NOHD8nAAgJLYs0g8iay1NmAvglT6Xg7Mi5pD5Zyzx7Ztx4EVQWlbZ2RRrj2hUsGwHaeACcGn~JzhAfYbT8yhg-ESo06d7wiU0Oz6LpejE1MsdXgM1PiZb0hsmR3tE2OywCLCzZGfI~8Zd5Q6b2L9dIWPSIhpcYJ0BL7-iO2NyLAa0tSWfA22zKQyNC9zV6nx9sey-munSOpIeMwpqBiM0czB3Nm0tU4fr1bEhMjCYz3IUE5ULTNNrJngMbD8YVMrZiu003jjgq0hsYDpoFNfa1kM46wFrP0v08ArsXotwd4JJc1Y7mBo76Th1QxDDlvZMPE0Cg__"
            nome="Curology Product Set"
            preco="$500"
            avaliacao="4"
            qntAvaliacao="145"
          />
        </>
      );
    }
  }
  function cinco() {
    if (props.numero == "5") {
      return (
        <>
          <Produto
            foto="https://s3-alpha-sig.figma.com/img/5f4e/a9ac/f805319ddf3897fc9daaf58559542260?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfcT8HwM6SJ53lfl~qmnerU4mLYCmhIv-CQfpKonSi87uO52uVwMe1AzcMoxiy8YL81w1GG2wPIE45SvWOSwEROAggQ1e0ikJO5RqMvU7yvOPmw98CwPBujNUhVuBt73xx9SwTOmTaSGVd6nTtW2TjDy8UptTSmC5AHWUKWkiDEooIihgumT7hT86GrYos5jL1pDX6jHa7uXNpZ~p6o1jrFGDwxrOso1YXbLDDcsg5kCyKidi3CWatdtbMzlMiqnzfW0Gc7ysrv7mYrwCNRaUANCX2EITVo0FJF6pCn9PBx22wWyfl6f1aekSa-DNJdoNI~VW4BBM7S965mCcXPIfA__"
            novo="true"
            cores="true"
            cor1="#FB1314"
            cor2="#DB4444"
            nome="Kids Eletric Car"
            preco="$960"
            avaliacao="5"
            qntAvaliacao="65"
          />
          <Produto
            foto="https://s3-alpha-sig.figma.com/img/d0b7/bb25/884f6fdfc1357634d7d7b09e05755c2f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Utu558DulBr9A2yKOfqqMs6wb--12YLl4U0TMwKeK545~PhSegSxr9hoNvlj5uAoTwHLRVXDtitktQ8XqJkSJmKkCL~42p2CKZLwQ0Y29V~H84EjEdBeK6yagoJbd4X3diWt6DYBPhK1FCf2--Iprv4CeQzGv~5Mupye5UPnDo~HRK4fX1FEjHDyt1pUYDkN61VRkWMdOdstC0qFA-uQkwGx9HBchzhtfGAmKcJvCABwAgLUJNrlbYFdmXfesK-IxSs9xmm~JrXdL1kueHddu~Rb~InhgDpGRlqsSEIlUztvpKLndMy~28v-opPj1wk8JNMDNvmAu2zT9UJBvakEOQ__"
            nome="Jr.Zoom Soccer Cleats"
            preco="$1160"
            avaliacao="5"
            qntAvaliacao="35"
            cores="true"
            cor1="#EEFF61"
            cor2="#DB4444"
          />
          <Produto
            foto="https://i0.wp.com/sthree.tech/wp-content/uploads/2016/03/Untitled_design__7_-removebg-preview.png?fit=522%2C478&ssl=1"
            nome="GP11 Shooter USB Gamepad"
            preco="$660"
            avaliacao="4.5"
            qntAvaliacao="55"
            novo="true"
            cores="true"
            cor1="#000"
            cor2="#DB4444"
          />

          <Produto
            foto="https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cy4ijlXPYVvJV1oORlCGHMKmOg6o5aCiHzTkEUiGtKi0dtXBQgl0LfiCVPqAVsE2gZkqAtXC9blFMLKP3t88oMkbinROITR1JmktcZFMNkln6GqKD1hwGpiHexqfS3ST79bsEXIeJZUUMBHYU7Vqg-L6JyCWyhIPC5q4YMUNHOuOB~yqc9aZy-2cPtkgoRFHqqEzL5NC8uFcgigA7oUKE-Ge3holiqWV7uhGY7tQ3j2BH89cbViEwUdQVujRhVF~wzieegO0mIC0soKCZzAaOCs9UmlIduzJVGPYgBRo6bBBbuh0pak8UzRxW9GXN4eGjZVKUvp6JEljErOkJdNF6g__"
            nome="Quilted Satin Jacket"
            preco="$660"
            avaliacao="4.5"
            qntAvaliacao="55"
            cores="true"
            cor1="#184A48"
            cor2="#DB4444"
          />
        </>
      );
    }
  }
  function seis() {
    if (props.numero == "6") {
      return (
        <>
          <div className={styles.bola}>
            <img src={setaCima} alt="" />
          </div>
        </>
      );
    }
  }
  return (
    <>
      <div className={styles.container}>
        {um()}
        {dois()}
        {tres()}
        {quatro()}
        {cinco()}
        {seis()}
      </div>
    </>
  );
}
export default GrupoProdutos;
