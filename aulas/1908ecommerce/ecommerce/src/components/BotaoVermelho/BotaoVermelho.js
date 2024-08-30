import styles from "./BotaoVermelho.module.css"

function BotaoVermelho(props){
    return(
        <>
        <div className={styles.container}>
            <button>{props.texto}</button>
        </div>
        </>
    )
}

export default BotaoVermelho