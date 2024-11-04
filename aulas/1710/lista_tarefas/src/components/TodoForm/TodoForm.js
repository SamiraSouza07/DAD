import styles from "./TodoForm.module.css";
import Botao from "../Botao/Botao";
import { useState } from "react";

function TodoForm(props) {
  const [tarefa, setTarefa] = useState("");
  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.tarefa}
          type="text"
          placeholder="Nova tarefa"
          onChange={(e) => {
            if (e.target.value != "") {
              setTarefa(e.target.value);
            }
          }}
        />
        <Botao titulo="Adicionar" addTask={props.addTask} tarefa={tarefa} />
      </div>
    </>
  );
}

export default TodoForm;
