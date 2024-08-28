import styles from "./TituloProduto.module.css"

function TituloProduto(props){
    function cronometro(){
        if(props.cronometro == "true"){
            return (
                <>
               <div className={styles.cronometro}>
                   <h1><p>Days</p>{props.dias}</h1>
                   <h1 className={styles.pontos}>:</h1>
                   <h1><p>Hours</p>{props.horas}</h1>
                   <h1 className={styles.pontos}>:</h1>
                   <h1><p>Minutes</p>{props.minutos}</h1>
                   <h1 className={styles.pontos}>:</h1>
                   <h1><p>Seconds</p>{props.segundos}</h1>
               </div>
               </>
            )
        }
    }
    return(
        <>
        <div className={styles.container}>
            <h1>{props.titulo}</h1>
            {cronometro()}
        </div>
        </>
    )
    
}
export default TituloProduto