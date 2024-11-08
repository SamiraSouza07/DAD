import { useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(props.tarefa.text);
  let id = props.tarefa.id;
  function tarefa() {
    if (props.tarefa.completed == false) {
      return (
        <p
          className={styles.p}
          onClick={(e) => {
            const newTask = {
              text: props.tarefa.text,
              completed: true,
            };
            e.target.classList.add("completa");
            props.editTask(props.tarefa.id, newTask);
          }}
        >
          {props.tarefa.text}
        </p>
      );
    } else {
      return (
        <p
          className={styles.completa}
          onClick={(e) => {
            const newTask = {
              text: props.tarefa.text,
              completed: false,
            };
            e.target.classList.remove("completa");
            props.editTask(props.tarefa.id, newTask);
          }}
        >
          {props.tarefa.text}
        </p>
      );
    }
  }
  return (
    <>
      <div className={styles.item}>
        {tarefa()}
        <div className={styles.buttons}>
          <button
            className={styles.editar}
            onClick={() => {
              const newText = window.prompt("Digite a nova tarefa: ");
              if (newText != "") {
                const newTask = {
                  text: newText,
                  completed: false,
                };
                props.editTask(props.tarefa.id, newTask);
              }
            }}
          >
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
