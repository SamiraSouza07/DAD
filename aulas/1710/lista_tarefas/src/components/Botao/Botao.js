import styles from "./Botao.module.css";

function Botao(props) {
  return (
    <>
      <button
        className={styles.botao}
        onClick={() => {
          if (props.titulo == "Adicionar") {
            if (props.tarefa != "") {
              props.addTask(props.tarefa);
            }
          } else if (props.titulo == "Todas") {
            props.filterTasks(1);
          } else if (props.titulo == "Completas") {
            props.filterTasks(2);
          } else if (props.titulo == "Incompletas") {
            props.filterTasks(3);
          }
        }}
      >
        {props.titulo}
      </button>
    </>
  );
}
export default Botao;
