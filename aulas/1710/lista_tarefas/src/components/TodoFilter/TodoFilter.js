import styles from "./TodoFilter.module.css"
import Botao from "../Botao/Botao"

function TodoFilter(props){
    return(
        <>
        <div className={styles.filtro}>
            <Botao titulo="Todas"/>
            <Botao titulo="Completas"/>
            <Botao titulo="Incompletas"/>

        </div>
        </>
    )
}

export default TodoFilter;