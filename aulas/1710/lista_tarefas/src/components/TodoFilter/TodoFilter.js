import styles from "./TodoFilter.module.css";
import Botao from "../Botao/Botao";

function TodoFilter(props) {
  return (
    <>
      <div className={styles.filtro}>
        <Botao titulo="Todas" filterTasks={props.filterTasks} />
        <Botao titulo="Completas" filterTasks={props.filterTasks} />
        <Botao titulo="Incompletas" filterTasks={props.filterTasks} />
      </div>
    </>
  );
}

export default TodoFilter;
