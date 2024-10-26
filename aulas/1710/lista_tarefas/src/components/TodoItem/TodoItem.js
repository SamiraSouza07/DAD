import styles from "./TodoItem.module.css";

function TodoItem(props) {
  let id = props.tarefa.id;
  function tarefa() {
    if (!props.tarefa.completed) {
      return(
      <p
        className={styles.p}
        onClick={(e) => {
          const newTask={
            text: props.tarefa.text,
            completed: true,
          }
          e.target.classList.add("completa");
          props.editTask(props.tarefa.id,newTask)
        }}
      >
        {props.tarefa.text}
      </p>
      )
    } else {
      return(
      <p
        className={styles.completa}
        onClick={(e) => {
          const newTask={
            text: props.tarefa.text,
            completed: false,
          }
          e.target.classList.remove("completa");
          props.editTask(props.tarefa.id,newTask)
        }}
      >
        {props.tarefa.text}
      </p>)
    }
  }
  return (
    <>
      <div className={styles.item}>
        {tarefa()}
        <div className={styles.buttons}>
          <button className={styles.editar} onClick={() => {
            const newText = window.prompt("Digite a nova tarefa: ")
            const newTask={
              text: newText,
              completed: false,
            }
            props.editTask(props.tarefa.id,newTask)

          }}>
            Editar
          </button>
          <button
            className={styles.remover}
            onClick={() => {
              props.removeTask(id);
            }}
          >
            Remover
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
