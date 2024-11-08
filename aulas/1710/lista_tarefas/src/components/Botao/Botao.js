import styles from "./Botao.module.css";

function Botao(props) {
  function handleSubmit() {
    if (props.tarefa.trim()) {
      props.addTask(props.tarefa);
      props.setTarefa("")
    }
  }
  return (
    <>
      <button
        className={styles.botao}
        onClick={() => {
          if (props.titulo == "Adicionar") {
            handleSubmit();
          } else if (props.titulo == "Todas") {
            props.setFilter("all");
          } else if (props.titulo == "Completas") {
            props.setFilter("completed");
          } else if (props.titulo == "Incompletas") {
            props.setFilter("incomplete");
          }
        }}
      >
        {props.titulo}
      </button>
    </>
  );
}
export default Botao;
