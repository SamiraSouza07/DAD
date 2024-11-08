import styles from "./TodoFilter.module.css";
import Botao from "../Botao/Botao";

function TodoFilter(props) {
  return (
    <>
      <div className={styles.filtro}>
        <Botao titulo="Todas" setFilter={props.setFilter} filter={props.filter}/>
        <Botao titulo="Completas" setFilter={props.setFilter} filter={props.filter}/>
        <Botao titulo="Incompletas" setFilter={props.setFilter} filter={props.filter}/>
      </div>
    </>
  );
}

export default TodoFilter;
