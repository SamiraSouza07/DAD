import styles from "./Botao.module.css"

function Botao(props){
    return(
        <>
        <button className={styles.botao}>{props.titulo}</button>
        </>
    )
}
export default Botao