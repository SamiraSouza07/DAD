import styles from "./TodoForm.module.css"
import Botao from "../Botao/Botao";

function TodoForm(props){
    return(
        <>
        <div className={styles.container}>
            <input className={styles.tarefa} type="text" placeholder="Nova tarefa"/>
            <Botao titulo="Adicionar"/>
        </div>
        </>
    )
}

export default TodoForm;