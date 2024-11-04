import styles from "./TodoApp.module.css";
import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import TodoFilter from "../TodoFilter/TodoFilter";
import TodoForm from "../TodoForm/TodoForm";

function TodoApp(props) {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: newTask.text, completed: newTask.completed }
          : task
      )
    );
  };

  const filterTasks = (param) => {
   
  };
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titulo}>{props.titulo}</h1>
        <TodoForm addTask={addTask} tasks={tasks} />
        <TodoFilter  />
        <TodoList tasks={tasks} editTask={editTask} removeTask={removeTask} />
      </div>
    </>
  );
}

export default TodoApp;
