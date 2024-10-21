import styles from "./TodoItem.module.css";

function TodoItem(props) {
  return (
    <>
      <div className={styles.item}>
        <p>{props.titulo}</p>
        <div className={styles.buttons}>
            <button className={styles.editar}>Editar</button>
            <button className={styles.remover}>Remover</button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
