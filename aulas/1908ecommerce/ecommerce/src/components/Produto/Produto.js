import styles from "./Produto.module.css";
import coracao from "../../assets/coracao.png"
import olho from "../../assets/olho.png"
import estrelaCompleta from "../../assets/estrelaCompleta.png"
import estrelaMetade from "../../assets/estrelaMetade.png"
import estrelaVazia from "../../assets/estrelaVazia.png"
let estrelas = []
function Produto(props) {
  function mensagem(){
    if(props.mensagem=="true"){
    return(
      <>
      <div className={styles.mensagem}>
        <h1>{props.texto}</h1>
      </div>
      </>
    )
  }
  }
  function avaliacao(){
    avaliacao = parseFloat(props.avaliacao)
    estrelas = []
    for (let i = 0; i < 5; i++) {
      if(avaliacao>=1){
        estrelas.push(<img className={styles.estrela} src={estrelaCompleta}/>)
        avaliacao = avaliacao-1
      }else if(avaliacao>0){
        estrelas.push(<img src={estrelaMetade}/>)
        avaliacao = 0
      }
      else if(estrelas.length <5 && avaliacao==0){
        estrelas.push(<img className={styles.estrela} src={estrelaVazia}/>)
      }

    }
    return <> {estrelas}</>
  }
  return (
    <>
      <div className={styles.card}>
        <div className={styles.containerFoto}>
          <p>{props.promocao}</p>
          <div className={styles.redondo}>
            <img src={coracao} alt="" />
          </div>
          <div className={styles.redondo}>
            <img src={olho} alt="" />
          </div>
          <img src={props.foto} alt="" />
          {mensagem()}
        </div>
        <div className={styles.info}>
          <h3>{props.nome}</h3>
          <div className={styles.preco}>
            <p>{props.preco}</p>
            <p>{props.precoAntigo}</p>
          </div>
          <div className={styles.estrelas}>
            {avaliacao()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Produto;
